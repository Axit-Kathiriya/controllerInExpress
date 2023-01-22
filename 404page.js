const path = require('path')
//const router = require("../1.js")
const rootdir = require('../util/path')



exports.errorcontroller = (req,res,next)=>{
   // res.status(404).sendFile(path.join(__dirname,"views","404.html"))
   res.status(404).render('404', {pageTitle:"page not found"})
}


