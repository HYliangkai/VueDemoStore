const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    username:{type:String},
    password:{type:String},
    shopping:[{
        itemsid:{type:mongoose.Schema.Types.ObjectId,ref:'items'}
    }]
})
const model = mongoose.model('users', schema)
module.exports = model