const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Routes
app.get('/',(req,res) => {
    res.send('we are on home');
    res.end();
});

app.get('/posts',(req,res) => {
    res.send('we are on posts');
    res.end();
});


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION , {useNewUrlParser: true });
mongoose.connection.on('open',() => {
    console.log('MongoDB: Connected');
    });
mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error',err);
    });


// How to we start listening to the server
app.listen(3000);
