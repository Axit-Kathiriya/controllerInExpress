const path = require('path')
const router = require('../routes/shop')

const rootdir = require('../util/path')

exports.admincontroller = (req, res, next)=>{
    res.sendFile(path.join(rootdir,"views","admin.html"))
}

exports.adminpostcontroller = (req,res,next)=>{
    console.log(req.body)
    res.redirect('/shop')
}

