const express = require('express');
const bodyParser = require('body-parser');
const classRepRoutes = require('./routes/classRepresentative');
const classObsRoutes = require('./routes/classObservation');
const teamRoutes = require('./routes/team');
const studentRecordRoutes = require('./routes/studentRecord');
const adminRoutes = require('./routes/admin');
const sequelize = require('./util/database');
const app = express();

const ClassRepresentative = require('./models/classRepresentative');
const ClassObservation = require('./models/classObservation');
const Team = require('./models/Team');
const StudentRecord = require('./models/studentRecord');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    ClassRepresentative.findByPk(1)
      .then(classRep => {
        req.classRep = classRep;
        next();
      })
      .catch(err => console.log(err));
  });
  

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
})

app.use(classRepRoutes);
app.use(classObsRoutes);
app.use(teamRoutes);
app.use(studentRecordRoutes);
app.use(adminRoutes);
app.get('/', (req,res)=> {
    res.send('Hello Node Here For Apis!!')
})


app.use((error,req,res,next)=>{
    console.log(error);
    const status = error.statusCode || 500 ;
    const message = error.message;
    res.status(status).json({
        message: message
    })
})

ClassObservation.belongsTo(ClassRepresentative, { constraints: true, onDelete: 'CASCADE' } );
ClassRepresentative.hasMany(ClassObservation);
Team.belongsTo(ClassRepresentative, { constraints: true, onDelete: 'CASCADE' } );
ClassRepresentative.hasMany(Team);
Team.belongsTo(StudentRecord, { constraints: true, onDelete: 'CASCADE' } );
StudentRecord.hasMany(Team);
// app.listen(3000)

sequelize
.sync()
.then(result => {
    return ClassRepresentative.findByPk(1);

  })
  .then(classRep => {
    if (!classRep) {
      return ClassRepresentative.create({id: 1, className: "10A", school: "KV Thrissur", Teacher: "Jagan", StudentTeacher1: "Goutham", StudentTeacher2: "Ashwini"  });
    }
    return classRep;
  })
.then(result=>{
    app.listen(3000)
}).catch(err =>{
    console.log(err)
})
