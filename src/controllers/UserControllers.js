const userModel = require("../models/UserModels");

const UserController = {
    create(request){
        userModel.create(request.body);
    },
    async list(){
        let users = await userModel.findAll();
        console.log(users);
    }
    
}


module.exports = UserController;