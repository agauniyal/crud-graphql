const { GraphQLServer } = require('graphql-yoga');
const morgan = require('morgan');
const helmet = require('helmet');

const { resolvers, typeDefs } = require('./graphql');
const { Post } = require('./db');
const { port } = require('./config');

const server = new GraphQLServer({ resolvers, typeDefs });

server.express.use(morgan('dev'));
server.express.use(helmet());

server.start({ port }, async ({ port }) => {
  await Post.sync();
  console.log(`Connected to DB and server is running on localhost:${port}`);
});
