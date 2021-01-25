const express = require('express');
const router = express.Router();
const slugify = require('slugify');
const Categories = require('../../models/Categories');



router.get('/admin/categories/new', (req,res) => {
    res.render('categories/admin/newCategories');


});




router.post('/categories/save', (req, res) => {
    let title = req.body.title;



    if(title != undefined){
            
        Categories.create({
            title:title,
            slug: slugify(title),
        }).then(() => {
           res.redirect('/admin/categories/index');
        });



    }else{
        res.redirect('/admin/categories/new');


    }
   


});



router.post('/categories/delete', (req, res) => {
    let id = req.body.id;


    if(id != undefined){

        if(!isNaN(id)){

            Categories.destroy({
                where:{
                    id:id,
                }
            }).then(() => {
                res.redirect('/admin/categories/index');
            })

        }else{
            res.redirect('/admin/categories/admin');

        }

    }else{
        res.redirect('/admin/categories/admin');

    }
});



router.get('/admin/categories/index', (req, res) => {
    
    Categories.findAll({
        
    }).then((categories) => {
        res.render('categories/indexCategories',{categories:categories});

    })

});

module.exports = router;