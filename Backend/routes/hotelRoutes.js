const express = require('express');
const {
  getHotel,
  getAllHotels,
  deleteHotel,
  updateHotel,
  createHotel,
} = require('./../controller/hotelController');

const router = express.Router();

router.route('/:id').get(getHotel).delete(deleteHotel).patch(updateHotel);
router.route('/').post(createHotel).get(getAllHotels);

module.exports = router;
