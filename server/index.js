const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
// USE expess.json() to get data into json format
app.use(express.json());
//Port 
const PORT = process.env.PORT || 5500;

// import routes
const TodoItemRoute = require('./routes/todoItems');


// connect to mongo database
mongoose.connect(process.env.DB_CONNECT)
.then(()=>console.log('Database connected'))
.catch(err => console.log(err))


app.use('/',TodoItemRoute);

app.listen(PORT,()=> console.log("Server connected"));