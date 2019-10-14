export default {
  Mutation: {
    setLoggedInUser: (_, { user }, { cache }) => {
      cache.writeData({ data: { loggedInUser: user } });
      return user;
    },
  },
};
