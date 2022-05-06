const mongoose=require('mongoose')
module.exports=mongoose.model('swpiers',new mongoose.Schema({
    swiperurl:{type:String}
}))