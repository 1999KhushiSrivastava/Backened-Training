const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  
  name:{
    type:String,
    required:true,
  },
  author_id:{
    type:Number,
    required:true
  },
  Price:Number,
  ratings:Number,
} ,


{timestamps:true})

module.exports = mongoose.model('Book', bookSchema) 