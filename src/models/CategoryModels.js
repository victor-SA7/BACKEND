const connection = require("../database/connection");
const {DataTypes} = require('sequelize');


let categorymodels = connection.define("Category",{
    name: DataTypes.STRING(255)
})

module.exports = categorymodels;