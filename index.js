const express = require("express");

const app = express();
// const mongoose = require("mongoose");

//Routes
app.get('/', (req, res) => { res.send('We are on home page');
 }); 

app.get('/posts', (req, res) => { res.send('We are on posts page');
 }); 

//Connect to DB


//Listening to the server
app.listen(3000);