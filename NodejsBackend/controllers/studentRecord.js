const StudentRecord = require('../models/studentRecord');
const Team = require('../models/Team');

exports.getStudentByTeam = (req,res,next) =>{
    const teamId = req.param.teamId;
    StudentRecord.findAll({where: {teamId: teamId}})
    .then(result =>{
        res.status(200).json({
            message: "GET Sucessfull",
            result: result
        })
    })
    .catch(err =>{
        next(err);
    })
}

exports.postStudentRecord = (req, res, next)=>{
    const teamId = req.body.teamId;
    const name = req.body.name;
    const rollNumber = req.body.rollNumber;

    Team.findByPk(teamId)
    .then(team =>{
      return  team.createStudentRecord({
            name: name,
            rollNumber: rollNumber
        })
    })
    .then(result =>{
        res.status(201).json({
            message: "POST request Sucessfull",
            result: result
        })
    })
    .catch(err =>{
        next(err);
    })

}