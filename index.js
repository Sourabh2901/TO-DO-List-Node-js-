const express       = require('express');
const path          = require('path');
const port          = 8001;
const db            = require('./config/mongoose');
const Task          = require('./models/task');

const app           = express();

app.set('view engine','ejs');
app.set('views' ,path.join(__dirname , 'views'));

//middlewares app.use() signifies middlewares
// express.urlencoded() function convert encoded data in readable form
app.use(express.urlencoded());

// express.static function is used to access the files of the mentioned directory in arguments of function
app.use(express.static('assets'));

//use express router 
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log("Error in Connecting to Server");
    }
    console.log("Succesfully Connected To Server");
});