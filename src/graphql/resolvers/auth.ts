export default {
  Mutation: {
    setloggedInUser: (_, { user }, { cache }) => {
      cache.writeData({ data: { user } });
      return user;
    },
  },
};
