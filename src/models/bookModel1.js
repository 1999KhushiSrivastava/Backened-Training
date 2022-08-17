const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({

  bookName :{
    type : String,
    required : true,
  },
  price :{
    indianPrice : String,
    europePrice : String,
  },
  year : {type : Number,
    default :2021
  },
  tags:[String],
  authorName : String , 
  totalPAges : Number,
  stockAvailabel : Boolean

},{timestamps:true});

module.exports = mongoose.model('book1', bookSchema)

