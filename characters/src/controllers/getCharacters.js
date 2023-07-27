const axios = require('axios')
const {response} = require('../utils')

module.exports = async (req, res)=>{
   const fetchData =  await axios.get(`http://localhost:8004/Character/`)
  response(res,200,fetchData.data)
}

// module.exports = async (req, res)=>{
//    const fetchData =  await axios.get(`http://database:8004/Character`)
//   response(res,200,fetchData.data)
// }