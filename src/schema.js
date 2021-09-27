const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    "Fetch a specific track, provided a track's ID"
    track(id: ID!): Track!
    "Fetch a specific symbol, provided a symbol's ID"
    symbol(id: ID!): Symbol!
  }

  "A track is a group of Symbols that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of symbols this track contains"
    symbolsCount: Int
    "The track's complete description, can be in markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Symbols"
    symbols: [Symbol!]!
  }

  "Author of a complete Track or a Symbol"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }

  "A Symbol is a single unit of teaching. Multiple Symbols compose a Track"
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
