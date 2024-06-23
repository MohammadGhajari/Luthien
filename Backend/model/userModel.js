const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

function getTime() {
  const currentdate = new Date();
  return (
    currentdate.getDate() +
    '/' +
    (currentdate.getMonth() + 1) +
    '/' +
    currentdate.getFullYear() +
    ' ' +
    currentdate.getHours() +
    ':' +
    currentdate.getMinutes() +
    ':' +
    currentdate.getSeconds()
  );
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'user should have a name'],
    },
    email: {
      type: String,
      required: [true, 'user should have an email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'please provide a valid email'],
    },
    dateOfBirth: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    nationality: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'not to say'],
      default: 'not to say',
    },
    address: {
      type: String,
    },
    password: {
      type: String,
      required: [true, 'user should have a password'],
      minLength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'user should have a password confirm'],
      select: false,
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: 'passwords are not the same',
      },
    },
    photo: {
      type: String,
      default: 'http://127.0.0.10:8000/users/default.png',
    },
    role: {
      type: String,
      enum: ['user', 'hotelier', 'admin'],
      default: 'user',
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    favoriteHotels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }],
    balance: {
      type: Number,
      default: 0,
    },
    reservedRooms: [
      {
        hotel: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Hotel',
        },
        room: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Room',
        },
      },
    ],
    activity: [
      {
        type: {
          type: String,
          enum: [
            'reserve', //data{hoteName, roomNumber, subBalance}
            'cancel', //{hotelName, roomNumber, addedBalance}
            'deposite', //{lastBalance, addedBalance}
            'updateProfile', //{}
            'updateName', //{lastName, newName}
            'updateEmail', //{lastEmail, newEmail}
            'updatePhoneNumber', //{lastPhone, newPhone}
            'updateBirthday', //{lastBirth, newBirth}
            'updateNationality', //{lastNationality, newNationality}
            'updateGender', //{lastGender, newGender}
            'updateAddress', //{lastAddress, newAddress}
            'becameHotelier', //{hotelName}
            'addFav', //{hotelName,}
            'deleteFav', //{hotelName}
            'addReview', //{hotelName, rating}
            'changePass', //{}
            'addHotelRoom', //for hotelier
            'deleteHotelRoom', //
          ],
        },
        date: {
          type: String,
          default: getTime(),
        },
        data: {
          type: Object,
        },
      },
    ],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

userSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'reservedRooms.hotel',
  }).populate({
    path: 'reservedRooms.room',
  });
  next();
});

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
