const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const mongoose = require('mongoose');

process.on('uncaughtException', (err) => {
  console.log(err);
  console.log('uncaughtExeption! Shutting down...');
  process.exit(1);
});

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('connected to database');
  });

const port = process.env.PORT || 8002;
const server = app.listen(port, '127.0.0.10', () => {
  console.log('app running on port: ' + port);
});

process.on('unhandledRejection', (err) => {
  console.log(err);
  console.log('unhandledRejection! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
