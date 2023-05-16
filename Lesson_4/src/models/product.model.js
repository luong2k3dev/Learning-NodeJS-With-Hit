let products = require('./db');
const fs = require('fs');
const path = require('path');

class Product {
    constructor(id, title, price, description, category, image, rating) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rating = rating;
    }

    static saveData() {
        fs.writeFile(path.join(__dirname, '/db.json'), JSON.stringify(products), function (err) {
            if (err) {
                console.error(err);
            } else {
                console.log('The data has been updated successfully !');
            }
        });
    }

    static getAllProduct() {
        return products;
    }

    static getById(id) {
        var product = products.find((item) => item.id == id);
        return product;
    }
}

module.exports = Product;