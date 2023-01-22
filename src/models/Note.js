//steps
//.  define Schema  --> Note: id, userId,title,dateadded
// create Model --> <model_name> <schema> Note
const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
id:{
    type:String,
    unique: true,
    require: true
},
userid: {
    type:String,
    require: true
},
content: {
    type:String,
    require: true
},
dateAdded: {
    type: Date,
    default:Date.now,
}
});
 module.exports = mongoose.model("Note",noteSchema)