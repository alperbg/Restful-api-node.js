const express = require('express');
const app = express();
const mongoose = require('mongoose');

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
mongoose.connect('mongodb://test_user:123456a@ds137857.mlab.com:37857/heroku_h9gw1wdw', {useNewUrlParser: true },  () => {
    console.log('Connected to DB')
})

// How to we start listening to the server
app.listen(3000);
