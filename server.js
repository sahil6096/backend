//Initialization

const express = require("express");
const app = express();
//App route
app.get("/",function(req,res){
    res.send("this is the homeapage")
});
app.get("/notes",function(req,res){
    res.send("this is the Notes Page")
});
//starting the server on  a port

app.listen(5000,function(){
    console.log("server start at PORT: 5000");
});