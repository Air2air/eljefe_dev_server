const resolvers = {
  Query: {
    // returns an array of Funds that will be used to populate the homepage grid of our web client
    fundsForHome: (_, __, { dataSources }) => {
      return dataSources.fundAPI.getFundsForHome();
    },

    // get a single fund by ID, for the fund page
    fund: (_, { id }, { dataSources }) => {
      return dataSources.fundAPI.getFund(id);
    },

    // get a single symbol by ID, for the symbol detail page
    symbol: (_, { id }, { dataSources }) => {
      return dataSources.fundAPI.getSymbol(id);
    },
  },
  // Manager: {
  //   manager: ({ id }, _, { dataSources }) => {
  //     return dataSources.fundAPI.getManager(id);
  //   },
  // },
  Portfolio: {
    symbols: ({ id }, _, { dataSources }) => {
      return dataSources.fundAPI.getFundSymbols(id);
    },
  },
  Fund: {
    manager: ({ id }, _, { dataSources }) => {
      return dataSources.fundAPI.getManager(id);
    },

    symbols: ({ id }, _, { dataSources }) => {
      return dataSources.fundAPI.getFundSymbols(id);
    },
  },
};

module.exports = resolvers;
