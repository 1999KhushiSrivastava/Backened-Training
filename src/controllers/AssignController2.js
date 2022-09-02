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

let getWeather = async function (req, res) {
    try {

        let city = req.query.q
        let id = req.query.appid
        console.log('query params are: ${city} ${id}')
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`,
        }
        let result = await axios(options);
        console.log(result.data)
        res.status(200).send({ msg: result.data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}
let getSortedCities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let id = req.query.appid
        let cityObjArray = []
        for (i = 0; i < cities.length; i++) {

            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${id}`
            }
            //let obj = { city: cities[i] }
            let result = await axios(options);
            let data = result.data.main.temp
            let name = result.data.name
          //  let city= result.data.city
            console.log(result.data.main.temp)
           // obj.temp = result.data.main.temp
            cityObjArray.push({"city":name,"temp":data})
           
        }
            cityObjArray.sort((a, b) => a.temp - b.temp )
        //console.log(sorted)

        res.status(200).send({ data: cityObjArray, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//------------------------------------------------memeHandler--------------------------------------------------------//

let getmeme = async function(req,res){
    try{
        let template_id =req.query.template_id
           let text0 =req.query.text0
            let text1 =req.query.text1
            let username= req.query.username 
            let password= req.query.password

         let options={
            method:"post",
            url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
         }
         let result = await axios (options)
         let data = result.data
          return res.status(200).send({msg:data})
    }
    catch(err){
        res.status(500).send({msg:err.message})
    }
}

 module.exports.getWeather = getWeather

module.exports.getSortedCities = getSortedCities
module.exports.getmeme=getmeme