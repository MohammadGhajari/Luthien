const express = require('express');
const {
  getHotel,
  getAllHotels,
  deleteHotel,
  updateHotel,
  createHotel,
  getAllRooms,
} = require('./../controller/hotelController');

const router = express.Router();

router.route('/').post(createHotel).get(getAllHotels);
router.route('/:id').get(getHotel).delete(deleteHotel).patch(updateHotel);
router.route('/:id/rooms').get(getAllRooms);

module.exports = router;
