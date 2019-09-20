var producersModel = require('../../model/producers')

exports.addProducers = async (root, args, context) => {

    presentProducer = await producersModel.find({
        name: args.name
    })

    if (presentProducer.length > 0) {
        return {
            "message": "Producers already exist",
            "success": false
        }
    }
    var DOB = new Date(args.DOB)

    var newProducer = new producersModel({
        name: args.name,
        gender: args.gender,
        DOB: DOB,
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
}

exports.editProducers=async(root,args,context)=>{
    editProducers = await producersModel.findOneAndUpdate({ name: args.name }, {name:args.name,gender: args.gender,DOB: args.DOB,
        bio: args.bio})

    if(editProducers){
        return{
            "message":"Producer does not exist",
            "success":false
        }
    }
    else{
        return{
            "message": "Producer sucessfully update",
            "success":true
        }
    }

}



exports.removeProducers = async (root, args, context) => {
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
}