var moviesModel = require('../../model/movies')

exports.addMovies = async (root, args, context) => {
    presentMovie = await moviesModel.find({
        name: args.name
    })
    if (presentMovie.length > 0) {
        return {
            "message": "Movies already exist",
            "success": false
        }
    }
    var newMovies = new moviesModel({
        name: args.name,
        yearOfRelease:  new Date(args.yearOfRelease),
        plot: args.plot,
        poster: args.poster,
        actors: args.actors,
        producers: args.producers
    })

    var saveMovie = newMovies.save()

    if (saveMovie) {
        return {
            "message": "Movies detail add succesfully ",
            "success": true
        }
    } else {
        return {
            "message": "Error while movies adding details",
            "success": false
        }
    }
}

exports.editMovies = async (root, args, context) => {
    editMovies = await moviesModel.findOneAndUpdate({
        name: args.name
    }, {
        name: args.name,
        yearOfRelease: args.yearOfRelease,
        plot: args.plot,
        poster: args.poster
    })
console.log(editMovies);

    if (!editMovies) {
        return {
            "message": "Movie does not exist",
            "success": false
        }
    } else {
        return {
            "message": "Movie sucessfully update",
            "success": true
        }
    }
}

exports.removeMovies = async (root, args, context) => {
    var removeMovies = await moviesModel.findOneAndRemove({
        "name": args.name
    })
    
    
    if (!removeMovies) {
        return {
            "message": "Movie does not exist",
        }
    } else {
        return {
            "message": "Movie sucessfully remove",
        }
    }
}

exports.addMoviesActors = async (root, args, context) => {

    editMovies = await moviesModel.findOneAndUpdate({
        name: args.name
    }, {
        $push: {
            actors: args.actors
        }
    })
console.log(editMovies);

    if (!editMovies) {
        return {
            "message": "Movie does not exist",
            "success": false
        }
    } else {
        return {
            "message": "Movie sucessfully update",
            "success": true
        }
    }
}