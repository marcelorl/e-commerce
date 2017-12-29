const express = require('express');

const product = require('./product/product.router');
const checkout = require('./checkout/checkout.router');
const shipping = require('./shipping/shipping.router');

const router = express.Router();
router.use(product);
router.use(checkout);
router.use(shipping);

module.exports = router;
