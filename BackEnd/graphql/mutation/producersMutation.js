var producersModel = require('../../model/producers')

exports.addProducers = async (root, args, context) => {
    try {
        presentProducer = await producersModel.find({
            name: args.name
        })
        if (presentProducer.length > 0) {
            return {
                "message": "Producers already exist",
                "success": false
            }
        }
        if (args.gender == "Female" || args.gender == "Male")
            var newProducer = new producersModel({
                name: args.name,
                gender: args.gender,
                DOB: new Date(args.DOB),
                bio: args.bio,
            })
        var saveProducer = newProducer.save()
        if (saveProducer) {
            return {
                "message": "Producer detail add succesfully ",
                "success": true
            }
        } else {
            return {
                "message": "Error while Producer adding details",
                "success": false
            }
        }
    } catch (err) {
        console.log(err);
    }
}

exports.editProducers = async (root, args, context) => {
    try {
        editProducers = await producersModel.findOneAndUpdate({
            name: args.name
        }, {
            name: args.name,
            gender: args.gender,
            DOB: new Date(args.DOB),
            bio: args.bio
        })
        if (editProducers) {
            return {
                "message": "Producer does not exist",
                "success": false
            }
        } else {
            return {
                "message": "Producer sucessfully update",
                "success": true
            }
        }
    } catch (err) {
        console.log(err);
    }
}

exports.removeProducers = async (root, args, context) => {
    try {
        var removeProducers = await producersModel.findOneAndRemove({
            "name": args.name
        })
        if (!removeProducers) {
            return {
                "message": "Producer does not exist",
            }
        } else {
            return {
                "message": "Producer sucessfully remove",
            }
        }
    } catch (err) {
        console.log(err);
    }
}