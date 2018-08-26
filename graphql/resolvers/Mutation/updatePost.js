const Post = require('../../../db/post');

const updatePost = async (_, { url, title, description }) => {
  try {
    const updates = {};
    if (title) {
      updates.title = title;
    }
    if (description) {
      updates.description = description;
    }
    await Post.update(updates, { where: { url } });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = { updatePost };
