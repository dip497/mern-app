// import mongoose to create new Schema

const mongoose = require('mongoose');

// create a new Schema

const TodoItemSchema =  new mongoose.Schema(
    {
        item:{
            type:String,
            required:true
        }
    }
)

// export the Schema

module.exports = mongoose.model('todo',TodoItemSchema);