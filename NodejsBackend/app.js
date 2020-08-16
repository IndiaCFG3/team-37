const express = require('express');
const bodyParser = require('body-parser');
const classRepRoutes = require('./routes/classRepresentative');
const sequelize = require('./util/database');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
})

app.use(classRepRoutes);

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

// app.listen(3000)

sequelize
.sync()
.then(result=>{
    app.listen(3000)
}).catch(err =>{
    console.log(err)
})
