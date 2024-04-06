const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
  roomNumber: {
    type: Number,
    required: [true, 'a room should have a number.'],
  },
  type: {
    type: String,
    enum: ['single', 'double', 'suite'],
    required: [true, 'a room should have a type.'],
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
