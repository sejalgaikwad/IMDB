var mongoose = require('mongoose')
var Schema = mongoose.Schema
var producersSchema = new Schema({
    name: {
        type: String
    },
    gender: {
        type: String
    },
    DOB: {
        type: String
    },
    bio: {
        type: String
    },
   
})
module.exports=mongoose.model('producers', producersSchema)
