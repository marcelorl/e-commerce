const express = require('express');

const { checkout, preview } = require('./checkout.controller.js');

const router = express.Router();

router.get('/checkout/preview', preview);
router.post('/checkout', checkout);

module.exports = router;
