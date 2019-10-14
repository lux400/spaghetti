import { gql } from 'apollo-boost';

export default gql`
  extend type Query {
    loggedInUser: [User]
  }

  input UserInput {
    id: ID
    email: String
  }

  extend type Mutation {
    setLoggedInUser(user: UserInput): [User]
  }
`;
