var moviesModel = require('../../model/movies')
var actorsModel = require('../../model/actors')
var producer =require('./producersMutation').addProducers

exports.addMovies = async (root, args, context) => {
    try {
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
            yearOfRelease: new Date(args.yearOfRelease),
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
    } catch (err) {
        console.log(err);
    }
}

exports.editMovies = async (root, args, context) => {
    try {
        editMovies = await moviesModel.findOneAndUpdate({
            name: args.name
        }, {
            name: args.name,
            yearOfRelease: new Date(args.yearOfRelease),
            plot: args.plot,
            poster: args.poster,
            actors: args.actors,
            producers: args.producers
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
    } catch (err) {
        console.log(err);
    }
}

exports.removeMovies = async (root, args, context) => {
    try {
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
    } catch (err) {
        console.log(err);
    }
}

exports.addMultipleActorsInMovies = async (root, args, context) => {
    try {
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
                "message": "sucessfully add Actors in Movies  ",
                "success": true
            }
        }
    } catch (err) {
        console.log(err);
    }
}


exports.removeActorsInMovies = async (root, args, context) => {
    try {
        var removeActors = await moviesModel.findOneAndUpdate({
            "name": args.name
        }, {
            $pull: {
                actors: {
                    $in: [args.actors]
                }
            }
        }, {
            multi: true
        })
        if (!removeActors) {
            return {
                "message": "Error while remove Actors in Movies",
            }
        } else {
            return {
                "message": "Remove Actors present in Movies",
            }
        }
    } catch (err) {
        console.log(err);
    }
}

//var removeMovies = await moviesModel.findOneAndUpdate({ "name":args.name},
//{$unset:{ "actors":args.actors } },{multi:true})

exports.removeProducerInMovies = async (root, args, context) => {
    try {
        var removeProducer = await moviesModel.findOneAndUpdate({
            "name": args.name
        }, {
            $unset: {
                "producers": args.producers
            }
        }, {
            multi: true
        })
        if (!removeProducer) {
            return {
                "message": "Error while remove Producers in Movies",
            }
        } else {
            return {
                "message": "Remove Producers present in Movies",
            }
        }
    } catch (err) {
        console.log(err);
    }
}

exports.createMovies = async (root, args, context) => {
    try{
    createMovies = await moviesModel.findOne({
        name: args.name
    })
    // var createMovies = moviesModel.find({name: args.name});
    // createMovies.forEach(function(doc) {
    //     actorsModel.insert(doc);
       //db.collectionA.remove(doc);
   // });
    if (createMovies) {
        return {
            message: "movies already exist"
        }
    }
    var create = new moviesModel({
        name: args.name,
        yearOfRelease: args.yearOfRelease,
        plot: args.plot,
        poster: args.poster,
        actors: args.actors,
        producers: producer
    })

    var save = create.save()
    if (save) {
        return {
            message: "save sucessfully"
        }
    } else {
        return {
            message: "save unsucessfully"
        }
    }
}
catch(err){
    console.log(err);
}
}