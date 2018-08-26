const { post } = require('./resolvers/Query/post');
const { posts } = require('./resolvers/Query/posts');

const { createPost } = require('./resolvers/Mutation/createPost');
const { deletePost } = require('./resolvers/Mutation/deletePost');
const { updatePost } = require('./resolvers/Mutation/updatePost');

const { typeDefs } = require('./typeDefs');

const resolvers = {
  Query: { post, posts },
  Mutation: { createPost, updatePost, deletePost }
};

module.exports = { resolvers, typeDefs };
