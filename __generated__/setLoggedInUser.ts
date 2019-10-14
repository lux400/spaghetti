/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: setLoggedInUser
// ====================================================

export interface setLoggedInUser_setLoggedInUser {
  __typename: "User";
  id: string;
  email: string;
}

export interface setLoggedInUser {
  setLoggedInUser: (setLoggedInUser_setLoggedInUser | null)[] | null;
}

export interface setLoggedInUserVariables {
  input: UserInput;
}
