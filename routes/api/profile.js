/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

// @route   GET /api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (request, response) => {
  response.json({ msg: 'Profile api works' });
});

module.exports = router;
