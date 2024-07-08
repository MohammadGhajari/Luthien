const {
  getAll,
  getOne,
  createOne,
  deleteOne,
  updateOne,
} = require('./handleFactory');
const catchAsync = require('./../utils/catAsync');
const Room = require('./../model/roomModel');
const multer = require('multer');

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      if (file.fieldname === 'photos') {
        cb(null, 'public/rooms');
      }
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split('/')[1];
      const prefix = 'photos';
      cb(null, `${prefix}-${Date.now()}.${ext}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
      cb(new AppError('Not an image! Please upload only images', 400), false);
    }
  },
});

exports.uploadFiles = upload.fields([{ name: 'photos', maxCount: 5 }]);

exports.getAllRooms = getAll(Room);
exports.getRoom = getOne(Room);
exports.createRoom = createOne(Room);
exports.deleteRoom = deleteOne(Room);

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};
exports.updateRoom = catchAsync(async (req, res, next) => {
  console.log(req.body); //empty
  const filteredBody = filterObj(
    req.body,
    'roomNumber',
    'capacity',
    'hotel',
    'price',
    'priceDiscount',
    'maxGuest',
    'isFull',
    'photos',
  );

  if (req.files) {
    if (req.files.photos) {
      const photosArray = req.files.photos.map(
        (photo) => 'http://127.0.0.10:8000/rooms/' + photo.filename,
      );
      filteredBody.photos = photosArray;
    }
  }

  const updatedRoom = await Room.findByIdAndUpdate(
    req.params.id,
    filteredBody,
    {
      new: true,
      runValidators: true,
    },
  );
  next();
  res.status(200).json({
    status: 'success',
    data: {
      room: updatedRoom,
    },
  });
});
