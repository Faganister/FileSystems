const userServices = require("../services/userServices")
class UsersControllers{
    async getUsers(req,res){
        const users = await userServices.getUsers()
        res.send(users)
    }
    getUser(req,res){

    }
    createUser(req,res){   
        userServices.createUser(req.body)
        res.send(`User ${JSON.stringify(req.body)} has been created`)
    }
    updateUser(req,res){

    }
    deleteUser(req,res){

    }
}

module.exports = new UsersControllers()