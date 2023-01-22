
const path = require('path')

const rootdir = require('../util/path')
const router = require('./admin')

exports.shopcontroller = (req, res, next)=>{
   
    res.sendFile(path.join(rootdir,"views","shop.html"))

}


