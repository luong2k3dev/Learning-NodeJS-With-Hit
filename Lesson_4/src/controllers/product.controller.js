const Product = require('../models/product.model');
let products = Product.getAllProduct();

const getProducts = (req, res) => {
    let data = products;
    const { price, price_gt, price_lt } = req.query;
    if (price) {
        data = products.filter((product) => product.price == price);
    } else if (price_gt) {
        data = products.filter((product) => product.price > price_gt);
    } else if (price_lt) {
        data = products.filter((product) => product.price < price_lt);
    }
    if (!data.length) {
        res.status(404).json({ error: "No Product Found !" });
        return;
    }
    res.json(data);
}

const getProductById = (req, res) => {
    const productId = req.params.id;
    const product = Product.getById(productId);
    if (!product) {
        res.status(404).json({ error: "No Product Found !" });
        return;
    }
    else {
        res.json(product);
    }
}

const creatProduct = (req, res) => {
    const data = req.body;
    const newProduct = new Product(data.id, data.title, data.price, data.description, data.category, data.image, data.rating);
    const objProduct = { ...newProduct }
    products.push(objProduct);
    Product.saveData();
    res.json(products);
}

const updateProductById = (req, res) => {
    const updateId = req.params.id;
    const product = Product.getById(updateId);
    if (!product) {
        res.status(404).json({ error: "No Product Found !" });
        return;
    }
    const data = req.body;
    const newProduct = new Product(data.id, data.title, data.price, data.description, data.category, data.image, data.rating);
    const objProduct = { ...newProduct };
    const index = products.findIndex((item) => item.id == updateId);
    products[index] = objProduct;
    Product.saveData();
    res.json(products);
}

const deleteProductById = (req, res) => {
    const deleteId = req.params.id;
    const product = Product.getById(deleteId);
    if (!product) {
        res.status(404).json({ error: "No Product Found !" });
        return;
    }
    const index = products.findIndex((item) => item.id == deleteId);
    products.splice(index, 1);
    Product.saveData();
    res.json(products);
}

module.exports = {
    getProducts,
    getProductById,
    creatProduct,
    updateProductById,
    deleteProductById
};