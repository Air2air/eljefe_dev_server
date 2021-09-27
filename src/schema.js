const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get portfolios array for the homepage grid"
    portfoliosForHome: [Portfolio!]!

    "Query to get funds array for the homepage grid"
    fundsForHome: [Fund!]!

    "Fetch a specific fund, provided a fund's ID"
    fund(id: ID!): Fund!

    "Fetch a specific symbol, provided a symbol's ID"
    symbol(id: ID!): Symbol!
  }

  "The group of Funds held by the User."
  type Portfolio {
    id: ID!

    "Name of the portfolio, user-created"
    name: String!

    "Funds in Portfolio"
    funds: [Fund]

    "Symbols in Portfolio"
    symbols: [Symbol]
  }

  "A Fund is a group of Symbols the fund is invested in."
  type Fund {
    id: ID!

    "The fund's title"
    title: String!

    "The fund's main Manager"
    manager: Manager

    "The fund's illustration to display in fund card or fund page detail"
    thumbnail: String

    "The fund's approximate length to complete, in minutes"
    length: Int

    "The number of symbols this fund contains"
    symbolsCount: Int

    "The fund's complete description, can be in markdown format"
    description: String

    "The number of times a fund has been viewed"
    numberOfViews: Int

    "The fund's complete array of Symbols"
    symbols: [Symbol!]!
  }

  "Manager of a complete Fund or a Symbol"
  type Manager {
    id: ID

    "Manager's first and last name"
    name: String!

    "Manager's profile picture"
    photo: String
  }

  "A Symbol is a single stock symbol. A fund has multiple symbols."
  type Symbol {
    id: ID!

    "The symbol's title"
    title: String!

    "The symbol's length in minutes"
    length: Int

    "The symbol's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript"
    content: String

    "The symbol's video url, for video-based symbols"
    videoUrl: String
  }
`;

module.exports = typeDefs;
