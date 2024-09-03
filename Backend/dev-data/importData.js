const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config({ path: './config.env' });

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
const batchInsert = async (Model, data, hashPassword = false) => {
  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  const totalBatches = Math.ceil(data.length / BATCH_SIZE);

  console.log(
    `Inserting ${data.length} documents into ${Model.modelName} collection`,
  );

  bar.start(totalBatches, 0);

  for (let i = 0; i < totalBatches; i++) {
    const start = i * BATCH_SIZE;
    const end = Math.min(start + BATCH_SIZE, data.length);
    const batch = data.slice(start, end);
    if (hashPassword && Model.modelName === 'User') {
      for (let j = 0; j < batch.length; j++) {
        console.log(j);
        const hashed = await bcrypt.hash(batch[j].password, 12);
        batch[j].password = hashed;
        batch[j].passwordConfirm = hashed;
      }
    }

    await Model.insertMany(batch);
    bar.update(i + 1);
  }

  bar.stop();
  console.log(`All ${Model.modelName} documents inserted successfully`);
};

const importData = async () => {
  try {
    await batchInsert(Hotel, hotels);
    await batchInsert(Room, rooms);
    await batchInsert(Review, reviews);
    await batchInsert(User, users, true);
    console.log('Data imported successfully');
  } catch (error) {
    console.error(error);
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
