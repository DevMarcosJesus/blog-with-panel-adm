const Sequelize = require('sequelize');
const db = require('../database/dbBlog');


Articles = db.define('articles',{
    title: {
        type: Sequelize.STRING,
    },


});

//Articles.sync({force:true});


module.exports = Articles;

