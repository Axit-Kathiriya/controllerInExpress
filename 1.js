
const http = require('http')

const path = require('path')

const express = require('express')

const bodyparser = require('body-parser')

const app = express()

const adminrouts = require('./routes/admin')

const shoprouts = require('./routes/shop')

const contactus = require("./routes/contacus")
const booked = require('./routes/booked')

const errorpage = require("./controller/404page")
const { ppid } = require('process')





app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))


app.use("/admin",adminrouts)
app.use('/shop',shoprouts)
app.use("/",contactus)
app.use('/',booked)
app.use( errorpage.errorcontroller )

//app.use((req,res,next)=>{
  //  res.sendFile(path.join(__dirname,"views","booked.html"))
//})
app.listen(4000);

