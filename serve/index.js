const express=require('express')
const app=express()

app.use(express.json())
app.use(require('cors')())
require('./router/web')(app)
require('./router/admin')(app)
require('./mongodbpulgin')()
app.set('key','chkzy')
app.listen('10086',(err)=>{
    if(!err)
    console.log('http://127.0.0.1:10086')
})