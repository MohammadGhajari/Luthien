const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'a hotel must have a name.'],
      unique: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Hotel must belong to a user.'],
    },
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
    stars: {
      type: Number,
      required: [true, 'a hotel should have a specific stars count.'],
      min: 1,
      max: 5,
    },
    city: {
      type: String,
      require: [true, 'a hotel belongs to a city.'],
    },
    description: {
      type: String,
      required: [true, 'a hotel should have a description.'],
    },
    address: {
      type: String,
      require: [true, 'a hotel must have an address.'],
    },
    phone: {
      type: String,
    },
    cover: {
      type: String,
    },
    photos: {
      type: [String],
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'at least 1 rating'],
      max: [5, 'at most 5 rating'],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    importantVicinityPlaces: [
      {
        name: String,
        distance: Number,
        time: Number,
      },
    ],
    country: {
      type: String,
      require: [true, 'a hotel must belong to a country.'],
    },
    facilities: [
      {
        type: String,
        enum: [
          'gym',
          'shopping',
          'prayer room',
          'tea maker',
          'ask inside room',
          'game',
          'breakfast',
          'pet',
          'free wifi',
          'elevator',
          'parking',
          'swimming pool',
        ],
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

hotelSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'owner',
    select: 'name',
  });
  this.populate({
    path: 'rooms',
    select: '-hotel',
  });
  next();
});

hotelSchema.virtual('countryFlag').get(function () {
  return `http://127.0.0.10:8000/flags/${this.country.toLowerCase().replace(/ /g, '-')}.png`;
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
