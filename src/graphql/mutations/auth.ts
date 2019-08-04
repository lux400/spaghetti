import gql from 'graphql-tag';

export const registerMutation = gql`
  mutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      email
    }
  }
`;

export const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
    }
  }
`;

export const loggedInUserMutation = gql`
  mutation($user: Object!) {
    setloggedInUser(user: $user) @client
  }
`;
