import { gql } from 'apollo-boost';

export const usersQuery = gql`
  query Users {
    users {
      id
      email
      firstName
      lastName
    }
  }
`;

export const loggedInUser = gql`
  query LoggedInUser {
    loggedInUser @client {
      id
      email
    }
  }
`;
