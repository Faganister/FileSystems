const fs = require('fs');
class UserServices{
    getUsers(){
        try {
            const data = fs.readFileSync('users.json', 'utf8');
            console.log(data);
            return data
          } catch (err) {
            console.error(err);
            return "database is not exists"
          }
        }
    createUser(data){
        fs.writeFile("users.json", JSON.stringify(data), (err)=>{
            if(err){
                console.error(err)
                return false
            }else{
                console.log("File was successfully recorded",data);
                
            }
        })
    }
}






module.exports = new UserServices()