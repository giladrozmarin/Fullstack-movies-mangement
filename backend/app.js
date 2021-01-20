const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');
const menuRouter = require('./routes/menu');
const bodyParser = require('body-parser');

//DB
require('./configs/database');
//init db 

// configure the body-parser
// to accept urlencoded bodies
// and json data
app.use(bodyParser.urlencoded({ extended: true }))  
   .use(bodyParser.json());

app.use('/', indexRoutes);
app.use('/menu', menuRouter);
app.listen(3001);