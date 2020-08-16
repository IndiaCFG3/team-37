const Admin = require("../models/admin");

exports.postAdminCheck = (req,res,next) =>{
    const email = req.body.email;
    const password = req.body.password;

    Admin.findAll({where: {email: email}})
    .then(result =>{
        const admin = result[0];
        if(admin.password === password){
            res.status(200).json({
                message: "Logged In Sucessfully",
                status: true
            })
        }
        else{
            res.status(404).json({
                message: "Incorrect Credentials",
                status: false
            })
        }
    })
    .catch(err =>{
        next(err);
    })

}

exports.postAdmin = (req,res,next) =>{
    const email = req.body.email;
    const password = req.body.password;

    Admin.create({
        email: email,
        password: password
    })
    .then(result =>{
        res.status(200).json({
            message: "Post Sucessfull",
            result: result
        })
    })
    .catch(err =>{
        next(err);
    })
}