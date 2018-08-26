const nanoid = require('nanoid');
const Post = require('../../../db/post');

const createPost = async (_, { title, description }) => {
  try {
    const url = nanoid();
    const newPost = Post.build({ url, title, description });
    await newPost.save();
    return url;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = { createPost };
