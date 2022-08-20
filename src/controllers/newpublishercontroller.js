const newPublisherModel = require("../models/newpublishermodel");

const createPublisher=async function(req,res){
    let data=req.body;
    let saveddata=await newPublisherModel.create(data);
    res.send(saveddata)
}

module.exports.createPublisher=createPublisher;