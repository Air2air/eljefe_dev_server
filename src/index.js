


const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const mocks = require('./mocks');

const JefeAPI = require('./datasources/fund-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
  dataSources: () => {
    return {
      jefeAPI: new JefeAPI(),
    };
  },
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});