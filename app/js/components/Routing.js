'use strict';

import React from 'react';
import { Router, Route, IndexRoute, withRouter, Link, browserHistory} from 'react-router'

import App from './App'
import ListContainer from '../containers/ListContainer'
import Test from './Test'

class Routing extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/list" component={withRouter(ListContainer)} />
          <Route path="/test" component={withRouter(Test)} />
        </Route>
      </Router>
    )
  }
}

export default Routing;
