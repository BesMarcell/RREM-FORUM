import { Redirect, Router, Route, IndexRoute } from 'react-router';
import React from 'react';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import WelcomePage from './components/WelcomePage';
import App from './containers/App';
import ForumContainer from './containers/ForumContainer';

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={WelcomePage} />
    <Route path="/welcome" component={WelcomePage} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forum" component={ForumContainer}>
    </Route>
  </Route>
);

export default Routes;
