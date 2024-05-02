const userServices = require("../services/userServices")
class UsersControllers{
    getUsers(req,res){
        const users = userServices.getUsers()
        res.send(users)
    }
    getUser(req,res){

    }
    createUser(req,res){
        console.log(req.body)
        userServices.createUser(req.body)
        if(userServices.createUser){
            res.send(`User ${JSON.stringify(req.body)} has been created`)
        }else{
            res.send("We got some problems")
        }
    }
    updateUser(req,res){

    }
    deleteUser(req,res){

    }
}

module.exports = new UsersControllers()