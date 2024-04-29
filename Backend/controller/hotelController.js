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

exports.getAllHotels = getAll(Hotel);
exports.getHotel = getOne(Hotel);
exports.createHotel = createOne(Hotel);
exports.deleteHotel = deleteOne(Hotel);
exports.updateHotel = updateOne(Hotel);

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
