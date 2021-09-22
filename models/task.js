const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    desc : String,
    date : String,
    category : String
});

const Task = mongoose.model('Task' ,taskSchema);

module.exports = Task;
