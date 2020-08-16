// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our databse, pass in your MYSQL information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'root', 'RaFb1308&$', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;