const express = require('express');
const upload = require('../config/multer');

const { uploadProduct, getAllProducts } = require('../controller/productController');

const router = express.Router();
router.post('/upload/:userId', upload.single('image'), uploadProduct);
router.get('/getall', getAllProducts);

module.exports = router;