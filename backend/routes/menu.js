var express = require('express');
var router = express.Router();
const authentication = require('../BL/authentication')

router.post('/login', async (req, res) =>
{
  console.log(req.body)
   //check the user details in userslogin DB 
   let data = await authentication.authenticationUser(req.body.userName, req.body.password)

   res.json(data)

 })

module.exports = router;