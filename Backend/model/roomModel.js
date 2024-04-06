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

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
