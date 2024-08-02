const connection = require("../database/connection");
const { DataTypes } = require("sequelize");

let UserModel = connection.define("User", {
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 50]
        }
    },
    surname: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 50]
        }
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true, 
        validate: {
            isEmail: true 
        }
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [8, 255] 
        }
    }
});

module.exports = UserModel;
