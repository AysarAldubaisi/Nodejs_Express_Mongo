const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  
   FirstName:{
    type: String,
    required: true

   },
   LastName:{
    type: String,
    required: true
   },
   Age : {
    type : Number,
    required: true
   },
   Class: {
    type: String ,
    required: true

   },
   year: {
      type:Number,
      required: true
   },
   Lesson: {
      type: String,
      required:true
  }
 });

const Studentdb = mongoose.model('student', schema);
module.exports = Studentdb;

