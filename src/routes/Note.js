const express = require("express");
const { modelName } = require("../models/Note");
const router = express.Router();
const note = require('./../models/Note')
router.post("/list", async function(req,res){
    var notes = await Note.find({
        userid: req.params.userid
    });
    res.json(notes);
    // res.send("this is the Notes Page")
});
// app.get("/notes/add", async function(req,res){
//     var newNote = new Note({
//         id:"003",
//         userid: "sahilsharma222@gmail.com",
//         title:"my third  notes",
//         content: "this is new conctent add"
//     });
 router.post("/add", async function(req,res){
    await Note.deleteOne({id: req.body.id});
    // res.json(res.body);
    var newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
    });

    
   await newNote.save();
   const response = {message:"new note creating" + `id:${req.body.id}`};
    res.json(response);
    // res.send("this is the Notes Page");

});
router.post("/delete",async function(req,res){
await Note.deleteOne({id: req.body.id})
const response = {message:"note deleted" + `id:${req.body.id}`};
res.json(response);
})
module.exports = router;