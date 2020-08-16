
const ClassRepresentative = require('../models/classRepresentative');

exports.getClassRep = (req,res,next) => {
    const classRepId = req.params.classRepId;
    res.status(200).json({
        message : "GET request Sucessful!!",
        result: classRepId
    })
}

exports.postClassRep = (req,res,next) => {
    const className = req.body.className;
    const school = req.body.school;
    const teacher = req.body.teacher;
    const studentTeacher1 = req.body.studentTeacher1;
    const studentTeacher2 = req.body.studentTeacher2;

    ClassRepresentative.create({
        className: className,
        school: school,
        Teacher: teacher,
        StudentTeacher1: studentTeacher1,
        StudentTeacher2: studentTeacher2
    })
    .then(result =>{
        res.status(201).json({
            message: "POST request Sucessfull!!",
           result: result
        })
    })
    .catch(err => {
        next(err);
    })

  

}

exports.getClassReps = (req,res,next) =>{
    ClassRepresentative.findAll()
    .then(result => {
        res.status(200).json({
            message: "GET Request Sucessful!",
            result: result
        })
    })
    .catch(err =>{
        next(err);
    })
}