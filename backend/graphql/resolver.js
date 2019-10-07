//Require Mutation
var addActors=require('./mutation/actorsMutation').addActors
var editActors=require('./mutation/actorsMutation').editActors
var removeActors=require('./mutation/actorsMutation').removeActors
var addProducers=require('./mutation/producerMutation').addProducers
var editProducers=require('./mutation/producerMutation').editProducers
var removeProducers=require('./mutation/producerMutation').removeProducers
var addMovies=require('./mutation/moviesMutation').addMovies
var editMovies=require('./mutation/moviesMutation').editMovies
var removeMovies=require('./mutation/moviesMutation').removeMovies
var addMultipleActorsInMovies=require('./mutation/moviesMutation').addMultipleActorsInMovies
var removeActorsInMovies=require('./mutation/moviesMutation').removeActorsInMovies
var removeProducerInMovies=require('./mutation/moviesMutation').removeProducerInMovies
var register=require('./mutation/userMutation').register
var login=require('./mutation/userMutation').login
var likeMovies=require('./mutation/moviesMutation').likeMovies
var unlikeMovies=require('./mutation/moviesMutation').unlikeMovies
const _ = require('lodash');


// Require Query
var searchActorsByName=require('./query').searchActorsByName
var searchMoviesByName=require('./query').searchMoviesByName
var searchProducersByName=require('./query').searchProducersByName
var getActors=require('./query').getActors
var getMovies=require('./query').getMovies
var getProducers=require('./query').getProducers
var getUsers=require('./query').getUsers


exports.resolvers = {
   
    Query:{
        searchActorsByName,
        searchMoviesByName,
        searchProducersByName,
        getActors,
        getMovies,
        getProducers,
        getUsers

    },

    Mutation:{
        register,
        login,
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
        removeActorsInMovies,
        removeProducerInMovies,
        likeMovies,
        unlikeMovies,
  
    },
}