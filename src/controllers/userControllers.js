const userServices = require("../services/userServices")
class UsersControllers{
    async getUsers(req,res){
        const users = await userServices.getUsers()
        res.send(users)
    }
    async getUser(req,res){
        const users = await userServices.getUsers()
        res.send(users.find(item => item.id == req.params.id))

    }
    async createUser(req,res){   
        const result = await userServices.createUser(req.body)
        res.send(`User ${JSON.stringify(req.body)} has been created`)
    }
    async updateUser(req,res){
        const result = await userServices.updateUser(req.body, req.params.id)
        res.send(`User ${JSON.stringify(req.body)} has been updated`)

    }
    async deleteUser(req,res){
        await userServices.deleteUser(req.params.id)
        res.send("User deleted successfully")
    }
}

module.exports = new UsersControllers()