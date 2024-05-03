const fs = require('fs');
class UserServices{
    getUsers(){
        return new Promise ((res,rej) =>{
        fs.readFile('users.json', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              rej(err)
            }
            res(JSON.parse(data))
          })
        })
    }
    
    createUser(userData){
        return new Promise ((res,rej) =>{
            fs.readFile('users.json', 'utf8', (err, data) => {
                if (err) {
                  console.error(err);
                  rej(err)
                }
                const result = JSON.parse(data)

                result.push(userData)
                fs.writeFile("users.json", JSON.stringify(result), (err)=>{
                    if(err){
                        console.error(err)
                        rej(err)
                    }
                    res("User created")
                })
              })
            



        
    })
    }
}






module.exports = new UserServices()