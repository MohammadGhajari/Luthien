const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.all('/', async (req, res, next) => {});

module.exports = app;
