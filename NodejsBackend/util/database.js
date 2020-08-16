const Sequelize = require('sequelize');

const sequelize = new Sequelize('cfgnodebackend','root','Goutham.p7358',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

module.exports = sequelize;   