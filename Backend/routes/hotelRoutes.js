const express = require('express');
const {
  getHotel,
  getAllHotels,
  deleteHotel,
  updateHotel,
  createHotel,
  getAllRooms,
  getTrending,
  handleSearchQuery,
  uploadFiles,
} = require('./../controller/hotelController');

const router = express.Router();

router.route('/').post(createHotel).get(getAllHotels);
router.route('/search-query').post(handleSearchQuery);
router.route('/trending').get(getTrending, getAllHotels);
router
  .route('/:id')
  .get(getHotel)
  .delete(deleteHotel)
  .patch(uploadFiles, updateHotel);
router.route('/:id/rooms').get(getAllRooms);

module.exports = router;
