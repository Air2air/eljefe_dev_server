const resolvers = {
  Query: {
    // returns an array of Funds owned by the User
    fundsForUser: (_, __, { dataSources }) => {
      return dataSources.jefeAPI.getFundsForUser();
    },

    // get a single fund by ID, for the fund detail page
    fund: (_, { id }, { dataSources }) => {
      return dataSources.jefeAPI.getFund(id);
    },

    // get a single symbol by ID, for the symbol detail page
    symbol: (_, { id }, { dataSources }) => {
      return dataSources.jefeAPI.getSymbol(id);
    },
  },

  Portfolio: {
    symbols: ({ id }, _, { dataSources }) => {
      return dataSources.jefeAPI.getFundSymbols(id);
    },
  },

  Fund: {
    manager: ({ id }, _, { dataSources }) => {
      return dataSources.jefeAPI.getManager(id);
    },
    symbols: ({ id }, _, { dataSources }) => {
      return dataSources.jefeAPI.getFundSymbols(id);
    },
  },
};

module.exports = resolvers;
