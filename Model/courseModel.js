const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    name:{type:String, require},
    quiz:[],
    desc:{type:String, require},
    teacher:{type:String, require},
    courseId: { type:'string', require }
    

},{
    timestamps: true,
})

module.exports = mongoose.model('course', courseSchema)