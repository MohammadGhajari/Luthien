const express = require('express');
const {
  getUser,
  createUser,
  getAllUsers,
  deleteUser,
} = require('./../controller/userController');

const router = express.Router();

router.route('/:id').get(getUser).delete(deleteUser);
router.route('/').post(createUser).get(getAllUsers);

module.exports = router;
