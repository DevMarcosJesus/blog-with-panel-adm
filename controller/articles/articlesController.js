const express = require('express');
const { default: slugify } = require('slugify');
const router = express.Router();
const Articles = require('../../models/Articles');
const Categories = require('../../models/Categories');




router.get('/articles', (req, res) => {
    res.render('articles/indexArticles');
});




router.get('/admin/articles/new', (req, res) => {
    Categories.findAll().then(categories => {
        res.render('articles/admin/newArticles',{categories:categories});

    })
    
});




router.post('/articles/save', (req, res) => {
    title = req.body.title;
    body = req.body.body;



    if(title && body != undefined){

        Articles.create({
            title:title,
            slug: slugify(title),
            body:body,
        }).then(() => {
            res.redirect('/');
        });



    }else{
        res.redirect('/admin/articles/new');

   
    }



});



module.exports = router;