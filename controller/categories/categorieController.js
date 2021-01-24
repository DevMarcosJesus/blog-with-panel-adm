const express = require('express');
const router = express.Router();
const slugify = require('slugify');
const Categories = require('../../models/Categories');

router.get('/', (req, res) => {
    res.send('enviado');
});


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
            res.redirect('/');
        });



    }else{
        res.redirect('/admin/categories/new');

    }
   

});







module.exports = router;