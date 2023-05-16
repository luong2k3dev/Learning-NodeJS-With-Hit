const express = require('express');
const router = express.Router();

const {
    getProducts,
    getProductById,
    creatProduct,
    updateProductById,
    deleteProductById
} = require('../controllers/product.controller');

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", creatProduct);
router.put("/:id", updateProductById);
router.delete("/:id", deleteProductById)

module.exports = router;