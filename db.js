const mongoose = require("mongoose");

var mongoURL ='mongodb+srv://Divyansh217:Divyansh@cluster0.fkq8n.mongodb.net/learningsystem'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('connected')
})

db.on('error', ()=>{
    console.log('Connection failed')
})

module.exports = mongoose