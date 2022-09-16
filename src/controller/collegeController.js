const collegeModel = require("../model/collegeModel.js")
const interModel = require("../model/internModel");
const validator = require("validator")
const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length > 0) return true;
    return false;
};

const isValidRequest = function (object) {
    return Object.keys(object).length > 0
};
const createcollage = async function (req, res) {
    try {
        const nameregex = /^[a-zA-Z ]*$/;
        const logoLinkregex= /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/

      
      
        const reqquery = req.query
        const college = req.body
        if (!isValidRequest(college)) return res.status(400).send({ status: false, message: "body required" })
        if (isValidRequest(reqquery)) return res.status(400).send({ status: false, message: "invalid request" })

        if (!isValid(college.name)) return res.status(400).send({ status: false, message: "name required" })
      
        if (!college.name.match(nameregex)) return res.status(400).send({ status: false, message: "name is not valid format" })
        const isDuplicate = await collegeModel.findOne({name:college.name})
        if(isDuplicate){
          return res.status(409).send({status:false,message:"this college name already exists"})
        }
        if (!isValid(college.fullName)) return res.status(400).send({ status: false, message: "fullName required" })
        if (!college.fullName.match(nameregex)) return res.status(400).send({ status: false, message: "fullName must in valid format" })

        if (!isValid(college.logoLink)) return res.status(400).send({ status: false, message: "logolink is required" })
    
       
        if (!logoLink.match(logoLinkregex))  
            return res.status(400).send({ status: false, message: "Please enter a valid URL. " })
        let collegecreate = await collegeModel.create(college)

        res.status(201).send({ status: true, message: "collage created successfully", data: collegecreate })

    } catch (err) {
        res.status(500).send({ status: false, error: err.message })
    }
}
const getcollegeDetails = async function (req, res) {
    try {
      let reqquery = req.query;
      if (!isValidRequest(reqquery))
        return res
          .status(400)
          .send({ status: false, msg: "query params should not be empty" });
  
      let collegeName = reqquery.collegeName;
      if (!collegeName)
        return res
          .status(400)
          .send({ status: false, message: "please provide college name" });
  
      const result = {};
  
      const college = await collegeModel.findOne({
        name: collegeName,
        isDeleted: false,
      });

      if (!college)
        return res
          .status(404)
          .send({ status: false, msg: "college name not exist" });
  
      const interns = await interModel.find({
        collegeId: college._id,
        isDeleted: false,
      });
  
      result.name = college.name;         // keyvalue pair
      result.fullName = college.fullName;
      result.logoLink = college.logoLink;
      result.interns = interns;
  
      if (Object.keys(interns).length == 0) {
        return res
          .status(400)
          .send({ status: true, msg: "no interns applied for this college" });
      }
      return res.status(200).send({ status: true, data: result });
    } catch (err) {
      res
        .status(500)
        .send({ status: false, message: "server error", error: err.message });
    }
  };
  


module.exports.createcollage = createcollage
module.exports.getcollegeDetails = getcollegeDetails;