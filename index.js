const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//Routes 
// Importing routes from posts.js
const postsRoute = require("./routes/posts");
app.use('/posts', postsRoute);

app.get('/', (req, res) => { res.send('We are on home page');
 }); 

//Connect to DB
// mongodb+srv:HSK:Hsk@6305@productdata.bepvc.mongodb.net/ProductData
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true},() => {
    console.log("Connected to MongoDB");
});

//Listening to the server
app.listen(3000);