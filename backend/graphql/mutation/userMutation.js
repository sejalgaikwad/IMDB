/**
 * @description : register user
 * @purpose : register user
 * @param {*} root : result of previous resolve function
 * @param {*} args : arguments for resolver funtions
 * @param {*} context : context 
 */

var userModel=require('../../model/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.register = async (parent, args, context) => {
  
        // email validation
        var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!emailFormat.test(args.email)) {
            throw new Error("not valid email")
        }
        // password validation
        if (args.password.length < 8) {
            throw new Error("password must have atleast 8 char")
        }
        // check if user exists
        var user = await userModel.find({
            "email": args.email
        })

        console.log(user.length);
        if (user.length > 0) {
            throw new Error("email already exists")
        }
        // encrypt password
        var hash = await bcrypt.hash(args.password, 10)

        var newUser = new userModel({
            "name": args.name,
            "email": args.email,
            "password": hash,
            
        })
        // save user 

        var saveUser = await newUser.save()
       
        if (saveUser) {
      
            return {
                "message": "registration successfully",
                "success": true
            };
        } else {
            return {
                "message": "registration unsucessfully",
                "success": false
            }
        }
    }


/**
 * @description : login user
 * @purpose : send token if user is login
 * @param {*} root : result of previous resolve function
 * @param {*} args : arguments for resolver funtions
 * @param {*} context : context 
 */
exports.login = async (parent, args, context, info) => {
    try {
        // Email validation
        var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!emailFormat.test(args.email)) {
            throw new Error("Incorrect email address")
        }
        // password verification
        if (args.password.length < 8) {
            throw new Error("password must have atleast 8 char")
        }
        // check if user exists
        var user = await userModel.find({ "email": args.email })

       
        if (user.length > 0) {
            if (user[0].verified === false) {
                throw new Error("Email not varified")
            }
            // compare password
            var valid = await bcrypt.compare(args.password, user[0].password)
            if (valid) {
                // Generate token
                console.log(user[0]._id);
                 
                var token = jwt.sign({ "email": user[0].email, "user_ID": user[0]._id }, 'APP_SECRET');

               
                return {
                    "message": "login sucessfully",
                    "token": token,
                    "success": true
                }
            } else {
                throw new Error("in correct password")
            }
        } else {
           
            throw new Error("Not registered")
           
        }
    } catch (err) {
        console.log(err);
    }
}



