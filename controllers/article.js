
//connect to db
    const { Sequelize } = require('sequelize');
    const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

// read model data
const Article = require('../models/article')(sequelize, Sequelize.DataTypes);

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

//export controller functions
module.exports = {
    getAllArticles
}