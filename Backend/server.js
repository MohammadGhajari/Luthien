const dotenv = require('dotenv');
// Load config.env only in development (Railway uses environment variables)
// In production, Railway will provide environment variables directly
if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: './config.env' });
}
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
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`app running on port: ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err);
  console.log('unhandledRejection! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
