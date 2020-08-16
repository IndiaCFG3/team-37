const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Team = sequelize.define('',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    className:{
        type: Sequelize.STRING,
        allowNull: false
    },
    school:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Teacher:{
        type: Sequelize.STRING,
        allowNull: false
    },
    StudentTeacher1:{
        type: Sequelize.STRING,
        allowNull: false
    },
    StudentTeacher2:{
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Team;