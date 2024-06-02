const express = require('express');
const {
  getUser,
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
  getMe,
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

router.get('/me', getMe, getUser);
router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser);
router.route('/').post(createUser).get(getAllUsers);

module.exports = router;
