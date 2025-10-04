const express = require('express');
const router = express.Router();
const ArticleAdminController = require('../../controllers/admin/article');


router.post('/article/create', ArticleAdminController.createArticle);

module.exports = router;