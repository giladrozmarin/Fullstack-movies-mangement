
const UserLogin  = require('../DAL/UsersLogin')





exports.authenticationUser = async (userName, password) => {
    //get data user list
    let data = await UserLogin.getUser(userName, password);
     console.log(data)
   if(data.length != 0 ){
     
      

     let permissions = await permissionsDAL.getAllPermissions()
     let permission = permissions.filter(x => x.id === user[0].id)
     return [user,permission]
   }
   else {
    return false     
   }

     return data 
}