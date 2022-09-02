//npm install sequelize mysql2
const Sequelize = require('sequelize');
const sequelize = new Sequelize('agendamentos', 'root', '890999000', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
});
module.exports = sequelize;
