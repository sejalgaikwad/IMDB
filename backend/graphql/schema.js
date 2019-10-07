const _ = require('lodash');
const { gql} = require('apollo-server');

const typeDefs = gql`
type users{
    name: String!
    email:String!
    password:String!
    favorite:[movies]
}

type actors{
    name: String!
    gender: String! 
    DOB: String
    bio:String!
    
}

type movies{
    _id: ID!
    name: String!
    yearOfRelease: String! 
    plot: String!
    poster:String!
    actors: [actors]
    producers:producers
    like:Int!
   
}

input placeInput{
    name: String!
    gender: String! 
    DOB: String
    bio:String!
    
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
    token:String! 
}

type Query{
    searchActorsByName(name:String):[actors]
    searchProducersByName(name:String):[producers]
    searchMoviesByName(name:String):[movies]
    getActors:[actors]
    getMovies:[movies]
    getProducers:[producers]
    getUsers:[users]
}

type Mutation{
    login(email:String!, password:String!):Auth
    register(name:String!, email:String!, password:String!):Auth
    addActors(name:String!, gender:String, DOB:String, bio:String ):Auth
    editActors(name:String!, gender:String, DOB:String, bio:String ):Auth
    removeActors(name:String!):Auth
    addProducers(name:String!, gender:String, DOB:String, bio:String ):Auth
    editProducers(name:String!, gender:String, DOB:String, bio:String ):Auth
    removeProducers(name:String!):Auth
    addMovies(name:String!, yearOfRelease: String, plot: String, poster: String, actors:String , producers:String ):Auth
    editMovies(name:String!, yearOfRelease: String, plot: String, poster: String, actors:String, producers:String):Auth
    removeMovies(name:String!):Auth
    addMultipleActorsInMovies(name:String!, actors:String ):Auth
    removeActorsInMovies(name:String!, actors:String!):Auth
    removeProducerInMovies(name:String!, producers:String!):Auth
    likeMovies(_id:ID!):Auth
    unlikeMovies(_id:ID!):Auth
   
 }`;
module.exports = {
    typeDefs
};