const Post = require('../../../db/post');

const deletePost = async (_, { url }) => {
  try {
    await Post.destroy({ where: { url } });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = { deletePost };
