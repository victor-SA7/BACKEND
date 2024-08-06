const connection = require("../database/connection");
const { DataTypes, Model } = require('sequelize');

const UserModel = require("./UserModels");

const Productmodel = connection.define("product", {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:
            {
                model: UserModel,
                key: 'id'
            },
            onDelete:'CASCADE'
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    }, //obrigatorio


    description: DataTypes.TEXT, //opcional


    price: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    }, //obrigatorio


    price_with_discount: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: 0
    }, //opcional


    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    },


    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }//obrigatorio // padrao: 0
})

module.exports = Productmodel;