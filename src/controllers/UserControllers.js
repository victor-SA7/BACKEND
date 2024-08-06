const { UPDATE } = require("sequelize/lib/query-types");
const userModel = require("../models/UserModels");
const { or } = require("sequelize");
const UserModel = require("../models/UserModels");
const Productmodel = require("../models/ProductModel");

const UserController = {
    async create(request, response) {
        let messageReturn = ''
        const email = request.body.email
        const emailReq = await UserModel.findOne({
            where: { email }
            });

        if (!request.body.firstname || !request.body.surname || !request.body.email || !request.body.password) {
            return response.status(400).json({
                messageReturn:"firstname, surname, email, password são obrigatorios!"
            })
        }
        else if (emailReq && emailReq.dataValues.id > 0){
            return response.status(400).json({
                messageReturn: 'Esse email já está cadastrado!'
            })
            
        }
        // const emailexist = userModel.findOne({ where: { email: request.body.email } })
        // if (emailexist && emailexist.dataValues.id > 0) {
        //     messageReturn: "Email ja cadastrado"
        // }

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
        // const product =await Productmodel.findAll({
        //     where:{
        //         user_id: users.id
        //     }
        // });

        // users.setDataValue('products', product); 

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