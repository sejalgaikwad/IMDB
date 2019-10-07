var mongoose = require('mongoose')
var Schema = mongoose.Schema
var actorsProducerSchema = new Schema({
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
 var ActorsSchema = mongoose.model('actors', actorsProducerSchema)
 var ProducerSchema= mongoose.model('producer', actorsProducerSchema)

module.exports={ActorsSchema,ProducerSchema}
    

