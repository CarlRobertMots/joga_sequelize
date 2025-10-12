const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');
const { Article, Author } = require('../../models');


class ArticleAdminController {

    
    createArticle = async (req, res) => {
        try {
            const name = req.body.name 
            const slug = req.body.slug
            const image = req.body.image;
            const body = req.body.body;
            const authorId = req.body.authorId;

            const newArticle = await Article.create({
                 name: name,
                 slug: slug,
                 image: image,
                 body: body,
                 published: new Date().toISOString().slice(0, 19).replace('T', ' '),
                    author_id: authorId
                });
            res.status(201).json({
                message: 'Article created successfully',
                newArticle: newArticle
            });
        } catch (error) {
            res.status(500).json({ error: 'Failed to create article' });
        }
    }
    getArticle = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    const authors = await Author.findAll();

    if (!article) {
      return res.status(404).send('Article not found');  // return prevents further execution
    }

    // Render the edit page only (no res.json!)
    return res.render('admin/editArticle', { article, authors });

  } catch (error) {
    console.error(error);
    return res.status(500).send('Failed to fetch article');
  }
}

   updateArticle = async (req, res) => {
    try {
      const { name, slug, image, body, authorId } = req.body;

      const [updated] = await Article.update(
        { name, slug, image, body, author_id: authorId },
        { where: { id: req.params.id } }
      );

      if (!updated) {
        return res.status(404).json({ error: 'Article not found or not updated' });
      }

      const updatedArticle = await Article.findByPk(req.params.id);
      res.status(200).json({
        message: 'Article updated successfully',
        updatedArticle
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update article' });
    }
  }
    deleteArticle = async (req, res) => {
        try {
            const articleId = req.params.id;
            const deleted = await Article.destroy({ where: { id: articleId } });

            if (!deleted) {
                return res.status(404).json({ error: 'Article not found' });
            }

            res.status(200).json({ message: 'Article deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete article' });
        }
    }
}


module.exports = new ArticleAdminController();