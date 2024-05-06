const userServices = require("../services/userServices")
const { validationResult } = require('express-validator')
class UsersControllers{
    async getUsers(req,res){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const users = await userServices.getUsers()
        res.send(users)
    }
    async getUser(req,res){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const users = await userServices.getUsers()
        res.send(users.find(item => item.id == req.params.id))

    }
    async createUser(req,res){   
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send(`User ${JSON.stringify(req.body)} has been created`)
        const result = await userServices.createUser(req.body)
    }
    async updateUser(req,res){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const result = await userServices.updateUser(req.body, req.params.id)
        res.send(`User ${JSON.stringify(req.body)} has been updated`)

    }
    async deleteUser(req,res){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        await userServices.deleteUser(req.params.id)
        res.send("User deleted successfully")
    }
}

module.exports = new UsersControllers()