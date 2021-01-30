const UserLogin  = require('../model/UsersLoginModel')



 exports.getUser = function(userName, password)
{
    return new Promise((resolve,reject) =>
        {
            UserLogin.find({UserName : userName , Password: password }, function(err,users)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve(users)
                }
            })
        })
}
