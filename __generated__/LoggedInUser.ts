/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LoggedInUser
// ====================================================

export interface LoggedInUser_loggedInUser {
  __typename: "User";
  id: string;
  email: string;
}

export interface LoggedInUser {
  loggedInUser: (LoggedInUser_loggedInUser | null)[] | null;
}
