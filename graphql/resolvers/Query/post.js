const Post = require('../../../db/post');

const post = async (_, { url }) => {
  try {
    return await Post.findOne({
      where: { url },
      attributes: ['url', 'title', 'description']
    });
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = { post };
