exports.postClassObservation = (req,res,next)=>{
    const classRep = req.classRep;
    const rollNumber = req.body.rollNumber;
    const teamNumber = req.body.teamNumber;
    const LeaderShip = req.body.LeaderShip;
    const MentorShip = req.body.MentorShip;

    console.log(rollNumber, "**********************************************");

    req.classRep.createClassObservation({
        rollNumber: rollNumber,
        teamNumber: teamNumber,
        LeaderShip: LeaderShip,
        MentorShip: MentorShip
    })
    .then(result => {
        res.status(201).json({
            message: "Created ClassObs Sucessfully!",
            result: result
        })
    })
    .catch(err=>{
        next(err);
    })
}

exports.getClassObservations = (req,res,next) => {
    req.classRep
    .getClassObservations()
    .then(classObs =>{
        res.status(200).json({
            message: "GET request sucessful",
            result: classObs
        })
    })
    .catch(err =>{
        next(err);
    })

}