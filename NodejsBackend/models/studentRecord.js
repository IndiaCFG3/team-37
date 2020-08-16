const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const  StudentRecord = sequelize.define('studentrecord',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    rollNumber: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = StudentRecord;