const express = require('express');
const {
  getHotel,
  getAllHotels,
  deleteHotel,
  updateHotel,
  createHotel,
  getAllRooms,
  getTrending,
} = require('./../controller/hotelController');
const { getAll } = require('../controller/handleFactory');

const router = express.Router();

router.route('/').post(createHotel).get(getAllHotels);
router.route('/trending').get(getTrending, getAllHotels);
router.route('/:id').get(getHotel).delete(deleteHotel).patch(updateHotel);
router.route('/:id/rooms').get(getAllRooms);

module.exports = router;
