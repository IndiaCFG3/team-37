exports.getTeam = (req,res,next) =>{
    req.classRep.getTeams()
    .then(result =>{
        res.status(200).json({
            message: "Get Request Sucessfull",
            result: result
        })
    })
    .catch(err =>{
        next(err);
    })
}

exports.postTeam = (req,res,next) => {
    const idea = req.body.idea;
    const plan = req.body.plan;
    const makeAndTest = req.body.makeAndTest;
    const presentation = req.body.presentation;

    req.classRep.createTeam({
        idea: idea,
        plans: plan,
        makeAndTest: makeAndTest,
        presentation: presentation
    }).then(result =>{
        res.status(201).json({
            message: "POST sucessfull",
            result: result
        })
    })
    .catch(err =>{
        next(err);
    })
}