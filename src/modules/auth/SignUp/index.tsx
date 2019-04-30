import * as React from 'react';
import { Mutation } from 'react-apollo';
import { RouteComponentProps } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { RegisterMutationVariables, RegisterMutation } from 'src/schemaTypes';
import { Form } from './components/Form';

const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      email
    }
  }
`;

export default class SignUp extends React.PureComponent<
  RouteComponentProps<{}>
> {
  render() {
    return (
      <Mutation<RegisterMutation, RegisterMutationVariables>
        mutation={registerMutation}
      >
        {(mutate) => (
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Form
              buttonText="register"
              onSubmit={async (data) => {
                const response = await mutate({
                  variables: data,
                });
                console.log(response);
                this.props.history.push('/login');
              }}
            />
          </div>
        )}
      </Mutation>
    );
  }
}
