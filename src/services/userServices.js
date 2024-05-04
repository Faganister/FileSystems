const fs = require('fs');
const fileHelper = require('../helpers/fileHelper');
class UserServices{
    async getUsers(){
        return await fileHelper.readFile("users.json")
    }
    async createUser(userData){
      const result = await fileHelper.readFile("users.json")
      result.push(userData) 
      return await fileHelper.writeFile("users.json", result)
    }
    //Здесь можно упростить код в двух функциях, если не делать проверку, но тогда будет в любом случае удаляться
    //В общем, я не уверен правильно ли то, что она находится в сервисах
    async updateUser(newUserData, userId){
      //readfile возвращает массив объектов распаршенных
      const result = await fileHelper.readFile("users.json");
      const userToUpdateIndex = result.findIndex(item => item.id == userId)
      if(userToUpdateIndex>=0){
        result.splice(userToUpdateIndex,1,{...newUserData, id:userId})
        return await fileHelper.writeFile("users.json", result)
      }
    }
    async deleteUser(userId){
      const userArray = await fileHelper.readFile("users.json");
      const userToDeleteIndex = userArray.findIndex(item => item.id == userId)
      if(userToDeleteIndex>=0){
        userArray.splice(userToDeleteIndex,1)
        return await fileHelper.writeFile("users.json", userArray)
      }
    }
    
}

module.exports = new UserServices()