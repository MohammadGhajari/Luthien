const express = require('express');
const {
  getReveiw,
  getAllReviews,
  deleteReview,
  updateReview,
  createReview,
  getHotelReviews,
} = require('./../controller/reviewController');

const router = express.Router();

router.route('/:id').get(getReveiw).delete(deleteReview).patch(updateReview);
router.route('/hotelReviews/:hotelName').get(getHotelReviews);
router.route('/').post(createReview).get(getAllReviews);

module.exports = router;
