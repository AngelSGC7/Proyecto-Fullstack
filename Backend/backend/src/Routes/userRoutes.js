const express = require('express');
const { registerUser, authUser, getUsers, getUserById } = require('../Controllers/userController');

const router = express.Router();

router.route('/').get(getUsers).post(registerUser);
router.route('/login').post(authUser);
router.route('/:id').get(getUserById);

module.exports = router;