module.exports=(app)=>{
    const express=require('express')
    const route = express.Router({ mergeParams: true })

    //统一CURD接口
    
    //查
    route.get('/',async(req,res)=>{
        const model=req.model
        const rep=await model.find()
        res.send(rep)
    })
    //单查
    route.get('/:id', async(req,res)=>{
        const model = req.model
        const rep = await model.findById(req.params.id)
            res.send(rep)
    })
    //增
    route.post('/', async(req, res) => {
        const model = req.model
        const rep = await model.create(req.body)
            res.send(rep)
    })
    //改
    route.put('/:id', async(req, res) => {
        const model = req.model
        const rep = await model.findByIdAndUpdate(req.params.id,req.body)
            res.send(rep)
    })
    //删
    route.delete('/:id', async(req, res) => {
        const model = req.model
        const rep = await model.findByIdAndDelete(req.params.id)
            res.send(rep)
    })

    
    app.use('/adminapi/rest/:modelname',(req,res,next)=>{
        req.model = require(`../model/${req.params.modelname}`)
        next()
    },route)

    //登录接口
    app.post('/adminapi/login', async (req, res) => {
        const model = require('../model/admin')
        const rep = await model.findOne({
            adminname: req.body.username,
            password: req.body.password
        })
        if (rep) {
            const jwt = require('jsonwebtoken')
            const token = jwt.sign({ id: rep._id }, app.get('key'))
            res.send({ token })
        } else {
            res.send({ error: 'nofound' })
        }
    })
    
        //上传接口
        const multer = require('multer');
        const MAO = require('multer-aliyun-oss');
        const upload = multer({
            storage: MAO({
                config: {
                    region: 'oss-cn-nanjing',
                    accessKeyId: 'LTAI5tQbEtVpsYuG38t6kGDt',
                    accessKeySecret: 'wuoxa5H2EINx8IYlXRz0aoUFmAZFNM',
                    bucket: 'chzkysxj',
                }
            })
        });
        //中间件:图片处理之后存储在req的file中
        app.post('/upload', upload.single('file'), async (req, res) => {
            const url = req.file
            res.send(url)
        })

}