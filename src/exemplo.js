const UserModel = require("./models/UserModels");

UserModel.create({
    firstname:"joaquin",
    surname: "Silva",
    email: "joaqui@email.com",
    password:"1234"
});

UserModel.destroy({
    where:{
        id: 2
    }
})