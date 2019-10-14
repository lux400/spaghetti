import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
// import { loggedInUser } from 'src/graphql/queries/users';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const client = useApolloClient();
  // const user = client.readQuery({ query: loggedInUser });
  const isLoggedIn = false;

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
