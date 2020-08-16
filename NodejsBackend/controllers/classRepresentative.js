
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

    res.status(201).json({
        message: "POST request Sucessfull!!",
        className: className,
        school: school
    })
}