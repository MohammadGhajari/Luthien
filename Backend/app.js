const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const compression = require('compression');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const app = express();
const errorController = require('./controller/errorController');
const userRouter = require('./routes/userRoutes');

//--------------------------MIDDLEWARES------------------------------
app.use(morgan('dev'));
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'too many requests. please try again in an hour.',
});
app.use(helmet());
app.use('/', limiter);
app.use(cors());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());
app.use(express.static(`${__dirname}/public`));
app.use(compression());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.all('/', async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello World',
  });
});

app.use('/api/users', userRouter);

app.use(errorController);

module.exports = app;
