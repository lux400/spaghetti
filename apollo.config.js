module.exports = {
  client: {
    clientSchemaDirectives: ['client', 'rest'],
    service: {
      localSchemaFile: './schema.json',
      name: 'spaghetti',
    },
  },
};

// https://github.com/apollographql/apollo/issues/239
// https://www.apollographql.com/docs/references/apollo-config/
// https://github.com/apollographql/fullstack-tutorial/blob/master/final/client/apollo.config.js
