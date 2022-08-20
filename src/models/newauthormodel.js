const mongoose=require('mongoose');

const ObjectId=mongoose.Schema.Types.ObjectId;
const newAuthorSchema=new mongoose.Schema({

    authorName:String,
    age:Number,
    address:String,
rating: Number

});

module.exports=mongoose.model('newAuthor',newAuthorSchema);