const express = require('express');
const {
  getUser,
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
} = require('./../controller/userController');
const {
  signUp,
  protect,
  login,
  logout,
} = require('./../controller/authController');

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.get('/logout', logout);

router.use(protect);

router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser);
router.route('/').post(createUser).get(getAllUsers);

module.exports = router;
