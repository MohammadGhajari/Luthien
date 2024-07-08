const express = require('express');
const {
  getRoom,
  getAllRooms,
  deleteRoom,
  updateRoom,
  createRoom,
  uploadFiles,
} = require('./../controller/roomController');

const router = express.Router();

router
  .route('/:id')
  .get(getRoom)
  .delete(deleteRoom)
  .patch(uploadFiles, updateRoom);
router.route('/').post(createRoom).get(getAllRooms);

module.exports = router;
