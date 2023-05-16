const data = require('../data/data');

const getProduct = (req, res) => {
    var products = data;
    var myPrice = req.query.price;
    if (myPrice) {
        products = data.filter((item) => item.price == myPrice)
    }
    res.render("product", { products });
}

const getProductById = (req, res) => {
    var products = data;
    var myId = req.params.productId;
    if (myId) {
        products = data.filter((item) => {
            return item.id == myId;
        })
    }
    res.render("product", { products });
}

const getAddProduct = (req, res) => {
    res.render("add-product");
}

const addProduct = (req, res) => {
    const product = req.body;
    res.json({ 
        product: product,
    })
}

module.exports = {
    getProduct,
    getProductById,
    getAddProduct,
    addProduct,
}