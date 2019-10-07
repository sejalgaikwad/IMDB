var actorsModel = require('../../model/actors').ActorsSchema
var logger=require('../../config/logger').logger

/**
 * @description : Add  actors
 * @purpose : Add actors
 * @param {*} root : result of previous resolve function
 * @param {*} args : arguments for resolver funtions
 * @param {*} context : context 
 */



exports.addActors = async (root, args, context) => {
    try {
        presentActor = await actorsModel.find({
            name: args.name
        })
        if (presentActor.length > 0) {
            return {
                "message": "Actor already exist",
                "success": false
            }
        }

        if (args.gender == "Female" || args.gender == "Male") {
            var newActors = new actorsModel({
                name: args.name,
                gender: args.gender,
                DOB: new Date(args.DOB),
                bio: args.bio,
            })
            var saveActor = newActors.save()
        }
        if (saveActor) {
            logger.info("message")
            return {
                "message": "Actor detail add succesfully ",
                "success": true
            }
        } else {
            return {
                "message": "Error while actor adding details",
                "success": false
            }
        }
    } catch (err) {
        console.log(err);
    }
}

/**
 * @description : Edit actors
 * @purpose : Edit Actors
 * @param {*} root : result of previous resolve function
 * @param {*} args : arguments for resolver funtions
 * @param {*} context : context 
 */

exports.editActors = async (root, args, context) => {
    try {
        editActors = await actorsModel.findOneAndUpdate({
            name: args.name
        }, {
            name: args.name,
            gender: args.gender,
            DOB: new Date(args.DOB),
            bio: args.bio
        })
        if (!editActors) {
            return {
                "message": "Actor does not exist",
                "success": false
            }
        } else {
            return {
                "message": "Actor sucessfully update",
                "success": true
            }
        }
    } catch (err) {
        console.log(err);
    }
}


/**
 * @description : Remove actors
 * @purpose : Remove actors
 * @param {*} root : result of previous resolve function
 * @param {*} args : arguments for resolver funtions
 * @param {*} context : context 
 */

exports.removeActors = async (root, args, context) => {
    try {
        var removeActors = await actorsModel.findOneAndRemove({
            "name": args.name
        })
        if (!removeActors) {
            return {
                "message": "Actor does not exist",
            }
        } else {
            return {
                "message": "Actor sucessfully remove",
            }
        }
    } catch (err) {
        console.log(err);
        return {
            "message": "Something bad happened"
        }
      //  logger.error(err.message)
    }
}