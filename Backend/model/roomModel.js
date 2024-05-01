const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
  roomNumber: {
    type: Number,
    required: [true, 'a room should have a number.'],
  },
  capacity: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, 'room should have a capacity'],
  },
  hotel: {
    type: mongoose.Schema.ObjectId,
    ref: 'Hotel',
    required: [true, 'a room belogs to a hotel.'],
  },
  price: {
    type: Number,
    required: [true, 'room of a hotel must have a price.'],
  },
  priceDiscount: {
    type: Number,
    validate: {
      validator: function (val) {
        return val < this.price;
      },
      message: 'discount price should be below regular price.',
    },
  },
  photos: {
    type: [String],
  },
  maxGuest: {
    type: Number,
  },
  isFull: {
    type: Boolean,
    default: false,
  },
});

roomSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'hotel',
    select: 'name ',
  });
  next();
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
