const mongoose = require('mongoose');
const Hotel = require('./hotelModel');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Review is required.'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Review should have a rating between 1 to 5.'],
    },
    status: {
      //for showing to admin
      type: String,
      enum: ['pending', 'confirmed', 'failed'],
      default: 'pending',
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user.'],
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel',
      required: [true, 'Review must belong to a hotel.'],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  },
);

reviewSchema.statics.calcAverageRatings = async function (hotelId) {
  const stats = await this.aggregate([
    {
      $match: { hotel: hotelId },
    },
    {
      $group: {
        _id: '$hotel',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);

  if (stats.length > 0) {
    await Hotel.findByIdAndUpdate(hotelId, {
      ratingsQuantity: stats[0].nRating,
      ratingsAverage: stats[0].avgRating,
    });
  } else {
    await Hotel.findByIdAndUpdate(hotelId, {
      ratingsQuantity: 0,
      ratingsAverage: 4.5,
    });
  }
};

reviewSchema.post('save', function () {
  this.constructor.calcAverageRatings(this.hotel);
});

reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.findOne();
  next();
});

reviewSchema.post(/^findOneAnd/, async function () {
  await this.r.constructor.calcAverageRatings(this.r.hotel);
});

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'hotel',
    select: 'name _id',
  }).populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});

// reviewSchema.post(/^find/, function () {
//   this.populate({
//     path: 'hotel',
//     select: 'name _id',
//   }).populate({
//     path: 'user',
//     select: 'name photo',
//   });
// });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
