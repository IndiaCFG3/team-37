const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Team = sequelize.define('team',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idea:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    plans:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    makeAndTest:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    presentation:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Team;