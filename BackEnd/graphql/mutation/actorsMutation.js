var actorsModel = require('../../model/actors')


exports.addActors = async (root, args, context) => {

    presentActor = await actorsModel.find({
        name: args.name
    })
    if (presentActor.length > 0) {
        return {
            "message": "Actor already exist",
            "success": false
        }
    }
    var newActors = new actorsModel({
        name: args.name,
        gender: args.gender,
        DOB: new Date(args.DOB),
        bio: args.bio,
    })

    var saveActor = newActors.save()

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
}

exports.editActors = async (root, args, context) => {
    editActors = await actorsModel.findOneAndUpdate({
        name: args.name
    }, {
        name: args.name,
        gender: args.gender,
        DOB: args.DOB,
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

}



exports.removeActors = async (root, args, context) => {
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
}