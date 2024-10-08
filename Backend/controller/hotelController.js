const {
  getAll,
  getOne,
  createOne,
  deleteOne,
  updateOne,
} = require('./handleFactory');
const Hotel = require('./../model/hotelModel');
const catchAsync = require('./../utils/catAsync');
const Room = require('./../model/roomModel');
const APIFeatures = require('./../utils/apiFeatures');
const multer = require('multer');
const { restart } = require('nodemon');
const { ResumeToken } = require('mongodb');

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      if (file.fieldname === 'cover') {
        cb(null, 'public/hotels/covers');
      } else if (file.fieldname === 'photos') {
        cb(null, 'public/hotels/photos');
      }
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split('/')[1];
      const prefix = file.fieldname === 'cover' ? 'cover' : 'photos';
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

exports.uploadFiles = upload.fields([
  { name: 'cover', maxCount: 1 },
  { name: 'photos', maxCount: 5 },
]);

exports.getAllHotels = getAll(Hotel);
exports.getHotel = getOne(Hotel);
exports.createHotel = createOne(Hotel);
exports.deleteHotel = deleteOne(Hotel);

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};
exports.updateHotel = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const filteredBody = filterObj(
    req.body,
    'name',
    'owner',
    'rooms',
    'stars',
    'description',
    'city',
    'address',
    'location',
    'phone',
    'cover',
    'photos',
    'country',
    'amenities',
    'importantVicinityPlaces',
  );

  if (req.files) {
    if (req.files.cover) {
      filteredBody.cover =
        'http://127.0.0.10:8000/hotels/covers/' + req.files.cover[0].filename;
    }
    if (req.files.photos) {
      const photosArray = req.files.photos.map(
        (photo) => 'http://127.0.0.10:8000/hotels/photos/' + photo.filename,
      );
      filteredBody.photos = photosArray;
    }
  }

  const updatedHotel = await Hotel.findByIdAndUpdate(
    req.params.id,
    filteredBody,
    {
      new: true,
      runValidators: true,
    },
  );
  // next();
  res.status(200).json({
    status: 'success',
    data: {
      hotel: updatedHotel,
    },
  });
});

exports.getAllRooms = catchAsync(async (req, res, next) => {
  const rooms = await Room.find({ hotel: req.params.id });

  res.status(200).json({
    stasus: 'success',
    results: rooms.length,
    data: {
      data: rooms,
    },
  });
});

exports.getTrending = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'ratingsAverage';
  next();
};

function checkCapacity(capacity, req) {
  capacity.sort((a, b) => a - b);
  req.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < capacity.length && j < req.length) {
    if (capacity[i] >= req[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }

  return j === req.length;
}

function toCamelCase(str) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
exports.handleSearchQuery = catchAsync(async (req, res, next) => {
  const data = await Hotel.find({ city: toCamelCase(req.body.city) });

  console.log(data);
  const reqCapacity = req.body.rooms.map((item) => item.adults);
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const roomCapacity = [];
    data[i].rooms.map((item) => roomCapacity.push(item.capacity));

    if (checkCapacity(roomCapacity, reqCapacity)) {
      result.push(data[i]);
    }
  }

  const result2 = [];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].rooms.length; j++) {
      if (
        !result[i].rooms[j].isFull &&
        (result[i].rooms[j].startDate > req.body.endDate ||
          result[i].rooms[j].endDate < req.body.startDate)
      ) {
        result2.push(result[i]);
        break;
      }
    }
  }

  const hotels = result2;

  res.status(200).json({
    status: 'success',
    results: hotels.length,
    data: hotels,
  });
});
