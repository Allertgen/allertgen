var Sequelize = require('sequelize');

var sequelize = new Sequelize(process.env.MYSQL || 'mysql://root@localhost:3306/allertgen');

module.exports = sequelize;
