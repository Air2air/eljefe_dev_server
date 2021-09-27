const mocks = {
  Query: () => ({
    fundsForUser: () => [...new Array(6)],
  }),

  Fund: () => ({
    id: () => "fund_01",
    title: () => "Schwab ® U.S. Mid-Cap Index Fund",
    manager: () => {
      return {
        name: "Grumpy",
        photo:
          "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

module.exports = mocks;
