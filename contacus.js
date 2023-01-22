
const path = require('path')
const router = require('../routes/shop')

const rootdir = require('../util/path')


exports.contactuscontroller = (req, res, next)=>{
    console.log("1111")
    res.sendFile(path.join(rootdir,"views","contactus.html"))
}

