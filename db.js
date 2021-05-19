const Sequelize = require('sequelize');
const PostModel = require('./models/posts');
const { config } = require('./config/index');

const sequelize = new Sequelize(
    encodeURIComponent(config.data_base_name),
    encodeURIComponent(config.username).toLowerCase(),
    encodeURIComponent(config.password),
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {
      // Your mysql2 options here
    },
  }
);

const Post = PostModel(sequelize, Sequelize);

sequelize.sync({ force: true }).then(() => {
  console.log('Tablas sincronizadas');
});

module.exports = {
  Post,
};
