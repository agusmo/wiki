const Sequelize = require("sequelize")

const sequelize = new Sequelize('postgres://postgres:ratapompa2011@localhost:5432/wiki',{
 logging: false,
});

module.exports = sequelize;
