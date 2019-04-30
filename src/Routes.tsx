import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login, SignUp } from './modules/auth';
import { Header } from './components/shared/Header';

export class Routes extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route
            path="/"
            render={() => (
              <>
                <Header />
                <>
                  <Route
                    exact={true}
                    path="/"
                    render={() => <div>homepage</div>}
                  />
                </>
              </>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
