const { gql} = require('apollo-server');

const typeDefs = gql`
type actors{
    name: String!
    gender: String! 
    DOB: String
    bio:String!
    
}

type movies{
    name: String!
    yearOfRelease: String! 
    plot: String!
    poster:String!
    actors: [actors]
    producers:[producers]
}

type producers{
    name: String!
    gender: String! 
    DOB: String
    bio:String!  
}

type Auth {
    message : String!
    success : Boolean!  
}

type Query{
    searchActorsByName(name:String):[actors]
    searchProducersByName(name:String):[producers]
    searchMoviesByName(name:String):[movies]
    getActors:[actors]
    getMovies:[movies]
    getProducers:[producers]
}

type Mutation{
    addActors(name:String!, gender:String, DOB:String, bio:String ):Auth
    editActors(name:String!, gender:String, DOB:String, bio:String ):Auth
    removeActors(name:String!):Auth
    addProducers(name:String!, gender:String, DOB:String, bio:String  ):Auth
    editProducers(name:String!, gender:String, DOB:String, bio:String  ):Auth
    removeProducers(name:String!):Auth
    addMovies(name:String!, yearOfRelease: String, plot: String, poster: String, actors:String, producers:String ):Auth
    editMovies(name:String!, yearOfRelease: String, plot: String, poster: String, actors:String, producers:String):Auth
    removeMovies(name:String!):Auth
    addMoviesActors(name:String!, actors:String ):Auth
 }`;
module.exports = {
    typeDefs
};