const ProductModel = require("../models/ProductModel");
const { list, update } = require("./UserControllers");

const ProductController = {
    create(request, response) {
        ProductModel.create(request.body);
        return response.json({
            messagem: "Produto recebeido com sucesso"
        });
    },

    async list(request, response) {
        const products = await ProductModel.findAll();
        response.json(products);
    },


    async update(request, response) {
        let id = request.params.id;
        ProductModel.update(request.body, {
            where: { id }
        });
        return response.json({
            messagem: "Produto atualizado com sucesso"
        })
    },
    async delete(request, response) {
        let id = request.params.id;
        ProductModel.destroy({
            where: { id }
        });
        return response.json({
            messagem: "Produto deletado com sucesso"
        })
    }
}

module.exports = ProductController