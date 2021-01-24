const express = require('express');
const router = express.Router();




router.get('/articles', (req, res) => {
    res.render('articles/indexArticles');
});



router.get('/admin/articles/new', (req, res) => {
    res.render('articles/admin/newArticles');
});




module.exports = router;