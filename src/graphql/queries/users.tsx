import { gql } from 'apollo-boost';

export const usersQuery = gql`
  query USERS {
    users {
      id
      email
      firstName
      lastName
    }
  }
`;

export const loggedInUser = gql`
  query {
    user @client
  }
`;
