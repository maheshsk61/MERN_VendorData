const express=require("express")
const port=2000
const app=express()
const router=require('./routes')
const cors = require('cors')
app.use(cors())
app.use("/data",router)
app.listen(port,()=>{
    console.log(`port is running on ${port}`);
})