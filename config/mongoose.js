// Require the mongoose package
const mongoose = require('mongoose');

// To establish the connection of mongoose(ODM) to the database(MONGODB)
mongoose.connect('mongodb://localhost/todo-list');

// Stroring the Established connection in a db variable
const db = mongoose.connection;

// If any error ocuurs while connection to DB
db.on('error',console.error.bind(console ,'error connecting to db'));

// when succesfully connected to db
db.once('open',function(){
    console.log('succesfully connected to DB');
});

