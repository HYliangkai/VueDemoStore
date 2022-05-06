const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    itemname:{type:String},
    picture:{type:String},
    catagory: { type: mongoose.Schema.Types.ObjectId, ref:'categories'},
    describe:{type:String},
    price:{type:String},
})
const model = mongoose.model('items', schema)
module.exports = model