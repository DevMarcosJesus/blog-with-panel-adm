const Sequelize = require('sequelize');
const db = require('../database/dbBlog');




Articles = db.define('articles',{
    title: {
        type: Sequelize.STRING,
        allowNull: false,


    },slug:{
        type: Sequelize.STRING,
        allowNull: false,


    },

    body: {
        type: Sequelize.TEXT,
        allowNull: false,


    }


});


//Articles.sync({force:true});


module.exports = Articles;

