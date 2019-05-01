import * as React from 'react';
import { Query, withApollo } from 'react-apollo';
import { gql } from 'apollo-boost';
import { RouteComponentProps } from 'react-router-dom';

const USERS = gql`
  query USERS {
    users {
      id
      email
      firstName
      lastName
    }
  }
`;

interface Props extends RouteComponentProps {
  client: any
}

class Login extends React.PureComponent<Props> {
  render() {
    console.log(USERS);
    return (
      <Query query={USERS}>
        {(lul: any) => {
          console.log(lul);
          if (lul.loading) return 'Loading...';
          if (lul.error) return `Error! ${lul.error.message}`;
          console.log(lul);
          return (
            <div>
              {lul.data.users.map((user: any, index: number) => {
                return <div key={index}>{user.email}</div>;
              })}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withApollo(Login as any);
