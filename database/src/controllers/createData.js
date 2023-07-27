const store = require('../db')
const {v4:  uuidv4 } = require('uuid')

module.exports = async (req, res)=>{
  const {model} = req.params
  let {name, _id, height} = req.body
  console.log('data', name, _id);
  if(!_id){
    _id = uuidv4()
  }

  const data = {
    _id: _id,
    name: name,
    height: height
  }

  const result = await store[model].insert(data)
  res.status(200).json(result)
}
