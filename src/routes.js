import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';

import App from './containers/App/App';

export default () => (
  /**
   * Please keep routes in alphabetical order
   */
  <Route path="/" component={App} />
);
