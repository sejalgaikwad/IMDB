
var actorsModel=require('../model/actors')
var moviesModel=require('../model/movies')
var producersModel=require('../model/producers')
var userModel=require('../model/user')



exports.searchActorsByName = (root, args, context) => {
    var search = actorsModel.find({
        'name': {
            $regex: args.name,
            $options: 'i'
        }
    })
    if (search) {
        return search
    }
}


exports.searchProducersByName = (root, args, context) => {
    var search = producersModel.find({
        'name': {
            $regex: args.name,
            $options: 'i'
        }
    })
    if (search) {
        return search
    }
}


exports.searchMoviesByName = (root, args, context) => {
    var search = moviesModel.find({
        'name': {
            $regex: args.name,
            $options: 'i'
        }
    })
    if (search) {
        return search
    }
}

exports.getActors= (root, args, context)=>{
    var search = actorsModel.find().populate('movies')
    if (search) {
        return search
    }
}

exports.getMovies= (root, args, context)=>{
    var search = moviesModel.find().populate('actors').populate('producers')
    if (search) {
        return search
    }
}

exports.getProducers= (root, args, context)=>{
    var search = producersModel.find().populate('movies')
    if (search) {
        return search
    }
}

exports.getUsers= (root, args, context)=>{
    var search = userModel.find().populate({path: 'favorite',model: 'movies'})
    if (search) {
        return search
    }
}







