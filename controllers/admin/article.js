const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');
const Article = require('../../models').Article;


class ArticleAdminController {

    createArticle = async (req, res) => {
        try {
            const name = req.body.name 
            const slug = req.body.slug
            const image = req.body.image;
            const body = req.body.body;

            const newArticle = await Article.create({
                 name: name,
                 slug: slug,
                 image: image,
                 body: body,
                 published: new Date().toISOString().slice(0, 19).replace('T', ' ')
            });
            res.status(201).json({
                message: 'Article created successfully',
                newArticle: newArticle
            });
        } catch (error) {
            res.status(500).json({ error: 'Failed to create article' });
        }
    }

}


module.exports = new ArticleAdminController();