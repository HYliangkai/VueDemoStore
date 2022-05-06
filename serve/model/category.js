const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{type:String}
})
const model = mongoose.model('categories', schema)
module.exports = model