var actorsModel = require('../../model/actors')
//var logger=require('../../config/logger')
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
                gender: gender,
                DOB: new Date(args.DOB),
                bio: args.bio,
            })
            var saveActor = newActors.save()
        }
        if (saveActor) {
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
      //  logger.error(err.message)
    }
}