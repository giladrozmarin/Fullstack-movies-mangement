const express = require('express')
const router = express.Router();
const Members = require('../model/MembersModel')
const UserLogin  = require('../model/UsersLoginModel')

router.route('/').
 get(function(req,resp)
 
    {
        UserLogin.find({},  (err,z) =>
        {
            if(err)
            {
                return resp.send(err)
            }
            return resp.json(z)
        })       
    });
    router.route('/'). 
post(function(req,resp)
            {
         
                const m = new UserLogin({
                    UserName : req.body.UserName,
                    Password : req.body.Password,
                 
                });
    
                m.save(function(err,MemberId) {
                    if(err)
                    {
                        return resp.send(err);
                    }
                    else
                    {  
                        return resp.send(MemberId._id) 
                    }
                })       
              
            });  
module.exports = router; 