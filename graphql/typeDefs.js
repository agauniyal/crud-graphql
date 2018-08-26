const typeDefs = `
  type Post {
    url: ID!
    title: String!
    description: String!
  }

  type Query {
    posts(limit:Int = 100, Offset: Int): [Post!]!
    post(url: ID!): Post
  }

  type Mutation {
    createPost(title: String!, description: String!): ID
    deletePost(url: ID!): Boolean!
    updatePost(url: ID!, title: String, description: String): Boolean!
  }
`;

module.exports = { typeDefs };
