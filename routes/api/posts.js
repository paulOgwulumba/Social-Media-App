/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

// @route   GET /api/post/test
// @desc    Tests post route
// @access  Public
router.get('/test', (request, response) => {
  response.json({ msg: 'Posts api works properly' });
});

module.exports = router;
