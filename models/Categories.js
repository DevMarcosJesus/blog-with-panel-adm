const Sequelize = require('sequelize');
const db = require('../database/dbBlog');


Categories = db.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    body: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

//Categories.sync({force: true});

module.exports = Categories;