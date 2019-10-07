var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    favorite: [{
        type: Schema.Types.ObjectId,
        ref: 'movies'
    }],
})

module.exports = mongoose.model('users', userSchema)