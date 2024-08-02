const express = require('express');
const app = express();

app.use(express.json());

const ProductModel = require("./models/ProductModel");
const userModel = require('./models/UserModels');
const UserModel = require('./models/UserModels');

app.get('/products', async function (request, response) {
    const products = await ProductModel.findAll();
    response.json(products);
});
app.get('/users', async function (request, response) {
    const users = await userModel.findAll();
    response.json(users);
});

app.post("/users", function(request, response){
    UserModel.create(request.body);
    return response.json({
        messagem :"usuario criado com sucesso!"
    });
}
);

app.post("/product", function(request, response){
    ProductModel.create(request.body);
    return response.json({
        messagem :"Produto recebeido com sucesso"
    });
});




app.listen(3000);
















































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
//         password: "12345678"
//     }
// }

// UserController.create(request);
// UserController.list();



// const ProductController = require("./controllers/ProductController");

// const batera = {
//     body:{
//         name: "Air Force One",
//         description: "O melhor tênis da nike!!",
//         price: 199.99,
//         enabled: 1,
//         stock: 6
//     }
// }

// ProductController.create(batera);
// ProductController.list();