const {
  getAll,
  getOne,
  createOne,
  deleteOne,
  updateOne,
} = require('./handleFactory');
const Room = require('./../model/roomModel');

exports.getAllRooms = getAll(Room);
exports.getRoom = getOne(Room);
exports.createRoom = createOne(Room);
exports.deleteRoom = deleteOne(Room);
exports.updateRoom = updateOne(Room);
