const User = require('./../model/userModel');
const { getOne, createOne, getAll, deleteOne } = require('./handleFactory');

exports.getUser = getOne(User);
exports.createUser = createOne(User);
exports.getAllUsers = getAll(User);
exports.deleteUser = deleteOne(User);
