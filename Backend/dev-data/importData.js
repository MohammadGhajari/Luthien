// const dotenv = require('dotenv');
// const fs = require('fs');
// dotenv.config({ path: './config.env' });
// const mongoose = require('mongoose');
// const Hotel = require('./../model/hotelModel');
// const User = require('./../model/userModel');
// const Review = require('./../model/reviewModel');
// const Room = require('./../model/roomModel');

// mongoose
//   // .connect(process.env.DATABASE, {
//   .connect(
//     'mongodb+srv://ghajarimohammad057:Mz8oAsKzPyGmQHfb@cluster0.gj0gdyn.mongodb.net/Lothien-app?retryWrites=true&w=majority&appName=Cluster0',
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//   )
//   .then((con) => {
//     console.log('connected to database');
//   });

// let users = JSON.parse(
//   fs
//     .readFileSync(`${__dirname}/users.json`, 'utf8')
//     .replace(/_DOMAIN_/g, 'http://127.0.0.10:8000/'),
// );
// let hotels = JSON.parse(
//   fs
//     .readFileSync(`${__dirname}/hotels.json`, 'utf8')
//     .replace(/_DOMAIN_/g, 'http://127.0.0.10:8000/'),
// );
// let rooms = JSON.parse(
//   fs
//     .readFileSync(`${__dirname}/rooms.json`, 'utf8')
//     .replace(/_DOMAIN_/g, 'http://127.0.0.10:8000/'),
// );
// let reviews = JSON.parse(fs.readFileSync(`${__dirname}/reviews.json`, 'utf8'));

// const importData = async () => {
//   try {
//     await User.create(users);
//     await Hotel.create(hotels);
//     await Room.create(rooms);
//     await Review.create(reviews);
//     console.log('data imported successfully');
//   } catch (error) {
//     console.log(error);
//   }
//   process.exit(0);
// };

// const deleteData = async () => {
//   try {
//     await User.deleteMany({});
//     await Hotel.deleteMany({});
//     await Room.deleteMany({});
//     await Review.deleteMany({});
//     console.log('data deleted successfully');
//   } catch (error) {
//     console.log(error);
//   }
//   process.exit(0);
// };

// if (process.argv[2] === '--import') {
//   importData();
// } else if (process.argv[2] === '--delete') {
//   deleteData();
// }
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config({ path: './config.env' });
333333333;
const mongoose = require('mongoose');
const Hotel = require('./../model/hotelModel');
const User = require('./../model/userModel');
const Review = require('./../model/reviewModel');
const Room = require('./../model/roomModel');
const cliProgress = require('cli-progress');

mongoose
  .connect(
    'mongodb+srv://ghajarimohammad057:Mz8oAsKzPyGmQHfb@cluster0.gj0gdyn.mongodb.net/Lothien-app?retryWrites=true&w=majority&appName=Cluster0',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    console.log('Connected to database');
  });

let users = JSON.parse(
  fs
    .readFileSync(`${__dirname}/users.json`, 'utf8')
    .replace(/_DOMAIN_/g, 'http://127.0.0.10:8000/'),
);
let hotels = JSON.parse(
  fs
    .readFileSync(`${__dirname}/hotels.json`, 'utf8')
    .replace(/_DOMAIN_/g, 'http://127.0.0.10:8000/'),
);
let rooms = JSON.parse(
  fs
    .readFileSync(`${__dirname}/rooms.json`, 'utf8')
    .replace(/_DOMAIN_/g, 'http://127.0.0.10:8000/'),
);
let reviews = JSON.parse(fs.readFileSync(`${__dirname}/reviews.json`, 'utf8'));

// Batch size for inserting documents
const BATCH_SIZE = 1000;

// Helper function to batch insert data and show progress
const batchInsert = async (Model, data) => {
  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  const totalBatches = Math.ceil(data.length / BATCH_SIZE);

  console.log(
    `Inserting ${data.length} documents into ${Model.modelName} collection`,
  );

  bar.start(totalBatches, 0);

  for (let i = 0; i < totalBatches; i++) {
    const start = i * BATCH_SIZE;
    const end = Math.min(start + BATCH_SIZE, data.length);

    await Model.insertMany(data.slice(start, end));
    bar.update(i + 1);
  }

  bar.stop();
  console.log(`All ${Model.modelName} documents inserted successfully`);
};

const importData = async () => {
  try {
    console.log(users.length);
    console.log(hotels.length);
    console.log(reviews.length);
    console.log(rooms.length);
    await batchInsert(User, users);
    await batchInsert(Hotel, hotels);
    await batchInsert(Room, rooms);
    await batchInsert(Review, reviews);
    console.log('Data imported successfully');
  } catch (error) {
    console.error(error.stack);
    console.log('error happen');
  }
  process.exit(0);
};

const deleteData = async () => {
  try {
    await User.deleteMany({});
    await Hotel.deleteMany({});
    await Room.deleteMany({});
    await Review.deleteMany({});
    console.log('Data deleted successfully');
  } catch (error) {
    console.error(error);
  }
  process.exit(0);
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
