const Sequelize = require('sequelize');
const dbBlog = new Sequelize('guiapress', 'root', '123',{
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = dbBlog;