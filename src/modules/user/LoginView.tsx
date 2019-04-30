import * as React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { RouteComponentProps } from 'react-router-dom';

const USERS = gql`
  query {
    users {
      id
      email
      firstName
      lastName
    }
  }
`;

export class LoginView extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    console.log(USERS);
    return (
      <Query query={USERS}>
        {(lul: any) => {
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
