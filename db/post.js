const Sequelize = require('sequelize');
const { dbConnectionString } = require('../config');
const sequelize = new Sequelize(dbConnectionString, { logging: false });

const Post = sequelize.define('post', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  url: { type: Sequelize.STRING, allowNull: false },
  title: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.TEXT, allowNull: false }
});

module.exports = Post;
