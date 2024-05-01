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

exports.handleSearchQuery = catchAsync(async (req, res, next) => {
  const data = await Hotel.find({ city: req.body.city });

  const reqCapacity = req.body.rooms.map((item) => item.adults);
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const roomCapacity = [];
    data[i].rooms.map((item) => roomCapacity.push(item.capacity));

    if (checkCapacity(roomCapacity, reqCapacity)) {
      result.push(data[i]);
    }
  }

  const hotels = result;

  res.status(200).json({
    status: 'success',
    results: hotels.length,
    data: hotels,
  });
});
