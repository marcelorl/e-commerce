const express = require('express');
const multer  = require('multer');
const mime = require('mime');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    const extension = mime.getExtension(file.mimetype);
    cb(null, `${Date.now()}.${extension}`)
  }
});

const upload = multer({ storage });
const { list, read, save } = require('./product.controller.js');

const router = express.Router();

router.get('/product', list);
router.get('/product/:id', read);
router.post('/product', upload.single('image'), save);

module.exports = router;
