const express = require('express');
const {
  getReveiw,
  getAllReviews,
  deleteReview,
  updateReview,
  createReview,
} = require('./../controller/reviewController');

const router = express.Router();

router.route('/:id').get(getReveiw).delete(deleteReview).patch(updateReview);
router.route('/').post(createReview).get(getAllReviews);

module.exports = router;
