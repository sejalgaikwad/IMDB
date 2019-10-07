var mongoose = require('mongoose')
var Schema = mongoose.Schema
var moviesSchema = new Schema({
    name: {
        type: String
    },
    yearOfRelease: {
        type: String
    },
    plot: {
        type: String
    },
    poster: {
        type: String
    },
    actors:[{
        type: Schema.Types.ObjectId,
        ref: 'actors'
    }],
    producers:{
        type: Schema.Types.ObjectId,
        ref: 'producer'
    },
   likeMovies:{
    type: Number,
    default: 0
   }
})
module.exports=mongoose.model('movies', moviesSchema)
