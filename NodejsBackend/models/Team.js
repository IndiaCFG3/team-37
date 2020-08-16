const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Team = sequelize.define('',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    
});

module.exports = Team;