const { UPDATE } = require("sequelize/lib/query-types");
const userModel = require("../models/UserModels");
const { or } = require("sequelize");
const UserModel = require("../models/UserModels");

const UserController = {
    create(request, response) {
        let messageReturn = ""

        if (!request.body.firstname || !request.body.surname || !request.body.email || !request.body.password) {
            messageReturn: "firstname, surname, email, password são obrigatorios!"
        }
        const emailexist = userModel.findOne({ where: { email: request.body.email } })
        if (emailexist == request.body.email) {
            messageReturn: "Email ja cadastrado"
        }

        else {
            userModel.create(request.body);
            messageReturn = "Usuario criado"
        }
        return response.json({
            messagem: messageReturn
        });
    },

    async list(request, response) {
        const users = await userModel.findAll();
        return response.json(users);

    },

    async update(request, response) {
        let id = request.params.id;
        userModel.update(request.body, {
            where: {
                id: id
            }
        });
        return response.json({
            messagem: "Usuario atualizado com sucesso"
        })
    },

    async delete(request, response) {
        let id = request.params.id;
        userModel.destroy({
            where: { id }
        });
        return response.json({
            messagem: "Usuario deletado com sucesso"
        })
    }

}


module.exports = UserController;