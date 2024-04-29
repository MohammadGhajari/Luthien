const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const Hotel = require('./../model/hotelModel');
const User = require('./../model/userModel');
const Review = require('./../model/reviewModel');
const Room = require('./../model/roomModel');

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('connected to database');
  });

const users = JSON.parse(
  fs
    .readFileSync(`${__dirname}/users.json`, 'utf8')
    .replace(/_DOMAIN_/g, 'http://127.0.0.10:8000/'),
);
const hotels = JSON.parse(
  fs
    .readFileSync(`${__dirname}/hotels.json`, 'utf8')
    .replace(/_DOMAIN_/g, 'http://127.0.0.10:8000/'),
);

const rooms = JSON.parse(
  fs
    .readFileSync(`${__dirname}/rooms.json`, 'utf8')
    .replace(/_DOMAIN_/g, 'http://127.0.0.10:8000/'),
);
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`, 'utf8'),
);

const importData = async () => {
  try {
    await User.create(users);
    await Hotel.create(hotels);
    await Room.create(rooms);
    await Review.create(reviews);
    console.log('data imported successfully');
  } catch (error) {
    console.log(error);
  }
  process.exit(0);
};

const deleteData = async () => {
  try {
    await User.deleteMany({});
    await Hotel.deleteMany({});
    await Room.deleteMany({});
    await Review.deleteMany({});
    console.log('data deleted successfully');
  } catch (error) {
    console.log(error);
  }
  process.exit(0);
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
