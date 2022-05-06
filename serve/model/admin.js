const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    adminname:{type:String},
    password:{type:String}
})
const model=mongoose.model('admins',schema)
module.exports=model