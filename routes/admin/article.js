const express = require('express');
const router = express.Router();
const ArticleAdminController = require('../../controllers/admin/article');


router.post('/article/create', ArticleAdminController.createArticle);

router.get('/article/edit/:id', ArticleAdminController.getArticle);

router.post('/article/edit/:id', ArticleAdminController.updateArticle);

router.post('/article/delete/:id', ArticleAdminController.deleteArticle);


module.exports = router;