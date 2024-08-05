const express = require('express');
const app = express();

app.use(express.json());


const UserControllers = require("./controllers/UserControllers");
const ProductController = require('./controllers/ProductController');


app.get('/products', ProductController.list);
app.post("/products", ProductController.create);
app.put('/products/:id', ProductController.update);
app.delete('/products/:id', ProductController.delete);


app.get('/users', UserControllers.list);
app.post("/users", UserControllers.create);
app.put('/users/:id', UserControllers.update);
app.delete('/users/:id', UserControllers.delete);
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