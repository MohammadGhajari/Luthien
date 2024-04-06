const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
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
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
