const express = require('express');

const { shipping } = require('./shipping.controller.js');

const router = express.Router();

router.get('/shipping', shipping);

module.exports = router;
