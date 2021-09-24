/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

// @route   GET /api/user/test
// @desc    Tests user route
// @access  Public
router.get('/test', (request, response) => {
  response.json({ msg: 'Users works' });
});

module.exports = router;
