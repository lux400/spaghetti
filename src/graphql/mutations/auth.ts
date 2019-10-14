import gql from 'graphql-tag';

export const registerMutation = gql`
  mutation Register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      email
    }
  }
`;

export const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;

export const loggedInUserMutation = gql`
  mutation SetLoggedInUser($user: UserInput!) {
    setLoggedInUser(user: $user) @client {
      id
      email
    }
  }
`;
