const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const classObservation = sequelize.define('',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
        name:{
            type:Sequelize.STRING,
            allowNull: false
        },
        roll_no:{
            type:Sequelize.STRING,
            allowNull: false
        },
        team_no:{
            type:Sequelize.STRING,
            allowNull:false
            
        },
        leadership:{
            type:Sequelize.STRING,
            allowNull:false
        },
        mentorship:{
            type:Sequelize.STRING,
            allowNull: false
        }
});

module.exports = classObservation;