let axios = require("axios")
//---------------------------"vaccination sessions by district id" ------------------------------//
let getDistricts = async function (req, res) {
    try {
        let id = req.query.district_id
        let date = req.query.date
        console.log(date)
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options);
        console.log(result.data)
        // let data = result.data
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getDistricts = getDistricts

//---------------------------------------------------------------2-----------------------------------------------//

