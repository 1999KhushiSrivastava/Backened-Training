const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const newAuthorController=require("../controllers/newauthorController")
const newpublishercontroller=require("../controllers/newpublishercontroller")
const newbookcontroller = require("../controllers/newbookcontroller")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/createnewAuthor",newAuthorController.createAuthor)

//router.post("/createPublisher",newpublishercontroller.createPublisher)
router.post("/createPublisher",newpublishercontroller.createPublisher)
router.post("/createnewbook",newbookcontroller.createBook)
router.get("/fetchesBooks",newbookcontroller.getData)
router.put("/update",newbookcontroller.update)
router.put("/update1",newbookcontroller.updateBol)
module.exports = router;