const express = require('express');
const {
  getRoom,
  getAllRooms,
  deleteRoom,
  updateRoom,
  createRoom,
} = require('./../controller/roomController');

const router = express.Router();

router.route('/:id').get(getRoom).delete(deleteRoom).patch(updateRoom);
router.route('/').post(createRoom).get(getAllRooms);

module.exports = router;
