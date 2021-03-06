module.exports = (app) => {
    const express = require('express')
    const route = express.Router({ mergeParams: true })


    route.post('/signup',async(req,res)=>{
        const model=require('../model/user')
        const rep=await model.create(req.body)
        res.send(rep)
    })
    route.post('/signin', async (req, res) => {
        const model = require('../model/user')
        const rep = await model.findOne(req.body)
        res.send(rep)
    })

    route.get('/swiper',async(req,res)=>{
        const model=require('../model/swiper')
        const rep=await model.find()
        res.send(rep)
    })

    route.get('/caregory',async(req,res)=>{
        const model=require('../model/category')
        const rep=await model.find()
        res.send(rep)
    })

    route.get('/items', async (req, res) => {
        const model = require('../model/item')
        const rep=await model.find().limit(10)
        res.send(rep)
    })

    route.get('/getitemsofcategory',async(req,res)=>{
        const id=req.query.id
        const model=require('../model/category')
        const a=require('../model/item')
        //mark一下,返回体过深要加lean()json化
        const rep = await model.findById(id).populate({path:'items'}).lean()
        res.send(rep)
    })

    route.get('/userinfo',async(req,res)=>{
        const id=req.query.id
        const model=require('../model/user')
        const rep = await model.findById(id).populate('shopping').lean()
        res.send(rep)
    })

    route.put('/userinfo',async(req,res)=>{
        const id=req.body._id
        const model=require('../model/user')
        const rep = await model.findByIdAndUpdate(id, req.body)
        res.send(rep)
    })
    
    route.get('/shoppinp',async(req,res)=>{
    const id=req.query.id
    const model=require('../model/user')
    const model1=require('../model/item')
        const rep = await model.findById(id).populate({ path: 'shopping.itemsid'}).lean()
    res.send(rep)
    })

    route.put('/user',async(req,res)=>{
        const model=require('../model/user')
        const id=req.body._id
        const rep=await model.findByIdAndUpdate(id,req.body)
        res.send(rep)
    })  

    app.use('/webapi', route)
}