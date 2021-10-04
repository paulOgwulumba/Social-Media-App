/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

// @route   GET /api/user/test
// @desc    Tests user route
// @access  Public
router.get('/test', (request, response) => {
  response.json({ msg: 'Users works' });
});

// @route GET /api/user/register
// @desc Registers a new user by adding their details to the database
// @access Public
router.post('/register', (request, response) => {

});

/**
 * @description Checks the validation status of user data to be added to the database.
 * @param userData object containing information about the new user.
 * @returns object containing a message and the status of the user data.
 */
function validateData() {}

module.exports = { router, validateData };
