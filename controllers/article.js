const { Article, Author } = require('../models'); // import models
//connect to db
   
// read models data
const models = require('../models');

// get all data from table
const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll(); 
    res.json(articles);
  } catch (err) {
    console.error("Error fetching articles:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

//show article by slug
const getArticleBySlug = (req, res) => {
   Article.findOne({
         where: {
             slug: req.params.slug
        },
        include: [{
            model: models.Author,
            as: 'Author'
        },
        {
            model: models.Tag,
            as: 'Tags',
            through: {
                model: models.ArticleTags,
            }
        }
    ]

    })
    .then(article => {
        console.log(article);
        return res.status(200).json({ article })
    })
    .catch(error => {
        return res.status(500).send(error.message);
    })
}


//export controller functions
module.exports = {
    getAllArticles,
    getArticleBySlug
}