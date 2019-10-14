/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_register {
  __typename: "User";
  email: string;
}

export interface Register {
  register: Register_register;
}

export interface RegisterVariables {
  email: string;
  password: string;
}
