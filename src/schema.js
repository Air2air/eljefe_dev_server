const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "List of portfolios for the user"
    portfolioList: [Portfolio!]!

    "Query to get funds array to populate portfolios"
    fundsInPortfolio: [Fund!]!

    "Fetch a specific fund"
    fund(id: ID!): Fund!

    "Fetch a specific symbol"
    symbol(id: ID!): Symbol!
  }

  "A portfolio held by the User."
  type Portfolio {
    id: ID!

    "Name of the portfolio, user-created"
    title: String!

    "The portfolio's description"
    description: String

    "Funds in Portfolio"
    funds: [Fund]

    "Symbols in Portfolio"
    symbols: [Symbol]
  }

  "Fund is within a Portfolio and contains a group of Symbols."
  type Fund {
    id: ID!

    "The fund's title"
    title: String!

    "The fund's main Manager"
    manager(id: ID!): Manager!
    # manager: [Manager!]!

    "The fund's description"
    description: String

    "The fund's complete array of Symbols"
    symbols: [Symbol!]!
  }

  "Manager of a Fund"
  type Manager {
    id: ID!

    "Manager's first and last name"
    title: String!

    "The manager's description"
    description: String
  }

  "A fund can have multiple symbols."
  type Symbol {
    id: ID!

    "The symbol's title"
    title: String!

    "The symbol's text-based description"
    description: String
  }
`;

module.exports = typeDefs;
