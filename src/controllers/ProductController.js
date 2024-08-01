const ProductModel = require("../models/ProductModel");
const { list } = require("./UserControllers");

const ProductController = {
    create(riquelme){
        ProductModel.create(riquelme.body);
    },

    async list(){
        let produtos = await ProductModel.findAll();
        console.log()
    }
}

module.exports = ProductController