const mongoose=require('mongoose');

const ObjectId=mongoose.Schema.Types.ObjectId;
const newPublisherSchema=new mongoose.Schema({

    name: String,
    headQuarter: String
    

});

module.exports=mongoose.model('newPublisher',newPublisherSchema);