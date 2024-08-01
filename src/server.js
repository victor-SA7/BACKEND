// const UserModel = require("./models/UserModels");

// UserModel.create({
//     firstname:"joaquin",
//     surname: "Silva",
//     email: "joaqui@email.com",
//     password:"1234"
// });

// UserModel.destroy({
//     where:{
//         id: 2
//     }
// })


// const ProductModel = require("./models/ProductModel")

// ProductModel.create({
//     name: "Air Force One",
//     description: "O melhor tênis da nike!!",
//     price: 199.99
// })



// const UserController = require("./controllers/UserControllers");


// const request = {
//     body:{
//         firstname: "Joaquim",
//         surname: "Silva",
//         email: "joaquin@gmail.com",
//         password: "1234"
//     }
// }

// UserController.create(request);
// UserController.list();


const ProductController = require("./controllers/ProductController");

const batera = {
    body:{
        name: "Air Force One",
        description: "O melhor tênis da nike!!",
        price: 199.99,
        enabled: 1,
        stock: 6
    }
}

ProductController.create(batera);
ProductController.list();