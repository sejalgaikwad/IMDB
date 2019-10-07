var moviesModel = require('../../model/movies')
var actorsModel = require('../../model/actors')
var producer = require('./producerMutation').addProducers
var userModel = require('../../model/user')
var jwt = require('jsonwebtoken')

/**
 * @description : Add  movies
 * @purpose : Add movies
 * @param {*} root : result of previous resolve function
 * @param {*} args : arguments for resolver funtions
 * @param {*} context : context 
 */

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

/**
 * @description : Edit  movies
 * @purpose : Edit movies
 * @param {*} root : result of previous resolve function
 * @param {*} args : arguments for resolver funtions
 * @param {*} context : context 
 */

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

/**
 * @description : Remove  movies
 * @purpose : Remove movies
 * @param {*} root : result of previous resolve function
 * @param {*} args : arguments for resolver funtions
 * @param {*} context : context 
 */

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

/**
 * @description : Add multiple actors in movies
 * @purpose :  Add multiple actors in movies
 * @param {*} root : result of previous resolve function
 * @param {*} args : arguments for resolver funtions
 * @param {*} context : context 
 */

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

/**
 * @description : Remove  actors in movies
 * @purpose : Remove actors in movies
 * @param {*} root : result of previous resolve function
 * @param {*} args : arguments for resolver funtions
 * @param {*} context : context 
 */

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

/**
 * @description :Remove producer in movies
 * @purpose :Remove producer actors in movies
 * @param {*} root : result of previous resolve function
 * @param {*} args : arguments for resolver funtions
 * @param {*} context : context 
 */

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

// /**
//  * @description : Add  movies
//  * @purpose : Add movies
//  * @param {*} root : result of previous resolve function
//  * @param {*} args : arguments for resolver funtions
//  * @param {*} context : context 
//  */

// exports.createMovies = async (root, args, context) => {
//     try {
//         createMovies = await moviesModel.findOne({
//             name: args.name
//         })

//         if (createMovies) {
//             return {
//                 message: "movies already exist"
//             }
//         }
//         var createMovie = new moviesModel({
//             name: args.name,
//             yearOfRelease: args.yearOfRelease,
//             plot: args.plot,
//             poster: args.poster,
//             actors: args.actors,
//             producers: producer
//         })

//         var save = createMovie.save()
//         if (save) {
//             return {
//                 message: "save sucessfully"
//             }
//         } else {
//             return {
//                 message: "save unsucessfully"
//             }
//         }



//     } catch (err) {
//         console.log(err);
//     }
// }

/**
 * @description : Like movies
 * @purpose : Like movies
 * @param {*} root : result of previous resolve function
 * @param {*} args : arguments for resolver funtions
 * @param {*} context : context 
 */

exports.likeMovies = async (root, args, context) => {
    likeMovies = await moviesModel.findByIdAndUpdate({
        _id: args._id
    }, {
        $inc: {
            likeMovies: 1
        }
    })

    if (context.token) {
        var payload = jwt.verify(context.token, "APP_SECRET")
        if (payload) {
            findUser = await userModel.findByIdAndUpdate({
                _id: payload.user_ID
            }, {
                $addToSet: {
                    favorite: args._id

                }
            })
            if (!findUser) {
                return {
                    "message": "user not exist",
                    "success": false
                }
            } else {
                return {
                    "message": "user sucessfully update",
                    "success": true
                }
            }
        }
    }
}

/**
 * @description : Unlike movies
 * @purpose : Unlike movies
 * @param {*} root : result of previous resolve function
 * @param {*} args : arguments for resolver funtions
 * @param {*} context : context 
 */

exports.unlikeMovies = async (root, args, context) => {
    unlikeMovies = await moviesModel.findByIdAndUpdate({
        _id: args._id
    }, {
        $inc: {
            likeMovies: -1
        }
    })

    if (context.token) {
        var payload = jwt.verify(context.token, "APP_SECRET")

        if (payload) {
            findUser = await userModel.findByIdAndUpdate({
                _id: payload.user_ID
            }, {
                $pull: {
                    favorite: {
                        $in: [args._id]
                    }
                }
            })

            if (!findUser) {
                return {
                    "message": "user not exist",
                    "success": false
                }
            } else {
                return {
                    "message": "user sucessfully update",
                    "success": true
                }
            }
        }
    }
}