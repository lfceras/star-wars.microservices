const axios = require('axios');
const {response} = require('../utils')

module.exports = async (req, res)=>{
  const {characterData} = req.body
  const characters = await axios.post(`http://localhost:8004/Character`, characterData)
  response(res, 200, characters.data)
}