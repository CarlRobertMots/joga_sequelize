'use strict';
const {
  Model
} = require('sequelize');
const tag = require('./tag');
module.exports = (sequelize, DataTypes) => {
  class ArticleTags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Article, {
        foreignKey: 'articleId',
      });
      this.belongsTo(models.Tag, {
        foreignKey: 'tagId',
      });
    }
  }
  ArticleTags.init({
     articleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },   
    },      
  {
    sequelize,
    modelName: 'ArticleTags'
    
  });
  return ArticleTags;
};