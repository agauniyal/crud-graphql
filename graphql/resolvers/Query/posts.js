const Post = require('../../../db/post');

const posts = async (_, { limit, offset }) => {
  try {
    limit = limit > 100 ? 100 : limit;
    return await Post.findAll({
      attributes: ['url', 'title', 'description'],
      limit,
      offset
    });
  } catch (err) {
    console.log(err);
    return [];
  }
};

module.exports = { posts };
