const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{type:String}
})
schema.virtual('items',{
    ref:'items',
    localField:'_id',
    foreignField:'catagory',
    justOne:false
})
const model = mongoose.model('categories', schema)
module.exports = model