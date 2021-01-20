var express = require('express');
var router = express.Router();
const authentication = require('../BL/authentication')

router.post('/', async (req, res) =>
{
    
   //check the user details in userslogin DB 
   let data = await authentication.authenticationUser(req.body.UserName, req.body.Password)

   res.json(data)

 })

module.exports = router;