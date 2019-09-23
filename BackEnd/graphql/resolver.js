
var addActors=require('./mutation/actorsMutation').addActors
var editActors=require('./mutation/actorsMutation').editActors
var removeActors=require('./mutation/actorsMutation').removeActors
var addProducers=require('./mutation/producersMutation').addProducers
var editProducers=require('./mutation/producersMutation').editProducers
var removeProducers=require('./mutation/producersMutation').removeProducers
var addMovies=require('./mutation/moviesMutation').addMovies
var editMovies=require('./mutation/moviesMutation').editMovies
var removeMovies=require('./mutation/moviesMutation').removeMovies
var addMultipleActorsInMovies=require('./mutation/moviesMutation').addMultipleActorsInMovies
var createMovies=require('./mutation/moviesMutation').createMovies
var removeActorsInMovies=require('./mutation/moviesMutation').removeActorsInMovies
var removeProducerInMovies=require('./mutation/moviesMutation').removeProducerInMovies



//Query
var searchActorsByName=require('./query').searchActorsByName
var searchMoviesByName=require('./query').searchMoviesByName
var searchProducersByName=require('./query').searchProducersByName
var getActors=require('./query').getActors
var getMovies=require('./query').getMovies
var getProducers=require('./query').getProducers


exports.resolvers = {
   
    Query:{
        searchActorsByName,
        searchMoviesByName,
        searchProducersByName,
        getActors,
        getMovies,
        getProducers

    },

    Mutation:{
        addActors,
        editActors,
        removeActors,
        addProducers,
        editProducers,
        removeProducers,
        addMovies,
        editMovies,
        removeMovies,
        addMultipleActorsInMovies,
        createMovies,
        removeActorsInMovies,
        removeProducerInMovies
    },
}