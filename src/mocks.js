const mocks = {
  Query: () => ({
    fundsInPortfolio: () => [...new Array(6)],
  }),

  Fund: () => ({
    id: () => "fund_01",
    title: () => "Schwab® U.S. Mid-Cap Index Fund",
    description: () => "Description for this Fund",
    manager: () => {
      return {
        id: 123,
        title: "Grumpy",
        description: "Manager description"
      };
    },
    symbols: () => {
      return {
        id: 123,
        title: "AAPL",
        description: "Symbol description"
      };
    },
  }),
};

module.exports = mocks;

