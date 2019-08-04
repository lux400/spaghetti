import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, SignUp } from './modules/auth';

export default () => {
  return (
    <div>
      <Switch>
        <Route
          path="/"
          exact={true}
          render={() => <Redirect to={{ pathname: '/login' }} />}
        />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};
