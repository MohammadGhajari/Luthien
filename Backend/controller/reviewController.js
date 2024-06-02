const {
  getAll,
  getOne,
  createOne,
  deleteOne,
  updateOne,
} = require('./handleFactory');
const Review = require('./../model/reviewModel');
const Hotel = require('./../model/hotelModel');
const catchAsync = require('./../utils/catAsync');

exports.getAllReviews = getAll(Review);
exports.getReveiw = getOne(Review);
exports.createReview = createOne(Review);
exports.deleteReview = deleteOne(Review);
exports.updateReview = updateOne(Review);

exports.getHotelReviews = catchAsync(async (req, res, next) => {
  const hotelName = req.params.hotelName;

  const hotel = await Hotel.findOne({ name: hotelName });

  const reviews = await Review.find({ hotel: hotel._id });

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: reviews,
  });
});
