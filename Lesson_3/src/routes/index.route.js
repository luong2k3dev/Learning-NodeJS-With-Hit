const express = require('express');
const router = express.Router();

const {
    getProduct,
    getProductById,
    getAddProduct,
    addProduct,
} = require('../controllers/index.controller');

router.get("/", getProduct);
router.get("/add", getAddProduct);
router.post("/add", addProduct);
router.get("/:productId", getProductById);

module.exports = router;