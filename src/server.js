//Initialization

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Note = require('./models/Note');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//true --> Nested objects (Coreect);s
//false --> Nestedobject (not correct);
mongoose.connect(
    "mongodb+srv://sahil:3k4HUsvUOqfLT51C@cluster0.r3m0et9.mongodb.net/notesapp").then(function(){
        app.get("/",function(req,res){
            const response = {message:"API Works"};
            res.json(response);
        });
        const noteRouter = require('./routes/Note')
     app.use("/notes",noteRouter)   //
    });



//App route

//starting the server on  a port

app.listen(5000,function(){
    console.log("server start at PORT: 5000");
});

//notes
// node install
// npm init
// npm install express
// Sharmasha@98
//mongopassword -3k4HUsvUOqfLT51C
//start server nodemon js
//npm run dev
// npm install body-parser