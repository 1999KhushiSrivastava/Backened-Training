const express = require('express');
const router = express.Router();
const AssignController2= require("../controllers/AssignController2")
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/districts",AssignController2.getDistricts)
router.get("/getWeather",AssignController2.getWeather)
router.get("/sortedCities",AssignController2.getSortedCities)
router.post("/meme",AssignController2.getmeme)
//router.get("/cowin/getByPin", CowinController.getByPin)

//router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;