const express=require('express')
const routes=express.Router()
const dataFromVendor=require('./vendorData.json')
routes.get("/vendorData",(req,res)=>{
    res.send(dataFromVendor)
})
module.exports=routes