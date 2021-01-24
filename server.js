const express = require('express');
const app = express();
const bodyParser = require('body-parser');




const Articles = require('./models/Articles');
const Categories = require('./models/Categories');




const categoriesController = require('./controller/categories/categorieController');
const articlesController = require('./controller/articles/articlesController');




const db = require('./database/dbBlog');


db.authenticate().then(() => {
    console.log('Connection Success Database');
}).catch((err) => {
    console.log(`${err}Not possible connection DB`);
});




app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));
app.set('view engine', 'ejs');




app.use('/', categoriesController);

app.use('/', articlesController);






app.listen(8000, () => {
    console.log('Online');
});