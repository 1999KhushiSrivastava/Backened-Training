const mongoose = require ('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId:{
      type:objectId,
      ref:"user"
    },
    productId:{
        type:objectId,
        ref:"product"
    },
    amount:Number,
    isFreeAppUser:{
        type:Boolean,
        default:false
    },
    date:String
},{timeStamp:true});

module.exports = mongoose.model('order',orderSchema)