import { gql } from "apollo-boost";

export const usersQuery = gql`
  query {
    users {
      id,
      email,
      firstName,
      lastName
    }
  }
`;
