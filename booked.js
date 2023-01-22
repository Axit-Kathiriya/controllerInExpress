
const path = require('path')

const rootdir = require('../util/path')
const router = require('./admin')

exports.bookedcontroller = (req, res, next)=>{
    console.log("1111")
    res.sendFile(path.join(rootdir,"views","booked.html"))
}

