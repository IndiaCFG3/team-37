const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const ClassObservation = sequelize.define('classObservation',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    rollNumber:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    teamNumber:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    LeaderShip:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    MentorShip:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = ClassObservation;
