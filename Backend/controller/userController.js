const User = require('./../model/userModel');
const {
  getOne,
  createOne,
  getAll,
  deleteOne,
  updateOne,
} = require('./handleFactory');

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};
exports.getUser = getOne(User);
exports.createUser = createOne(User);
exports.getAllUsers = getAll(User);
exports.deleteUser = deleteOne(User);
exports.updateUser = updateOne(User);
