const connection = require("../database/connection");
const {DataTypes} = require('sequelize');


let userModel = connection.define("User", {
    firstname: {
    type:DataTypes.STRING(50),
    allowNull: false,    
    },    //firstname varchar(50)
    
    surname: {
       type: DataTypes.STRING(50),
        allowNull: false,
    },     //surname varchar(50)


    email:{
        type: DataTypes.STRING(255),
        allowNull:false
    },     //email varchar(255)


    password:{
        type: DataTypes.STRING(255),
        allowNull:false,
    },         //password varchar(255)
});


module.exports = userModel;