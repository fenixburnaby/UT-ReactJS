import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../pages/Main'
import Welcome from '../pages/Welcome'
import SecondPage from '../pages/SecondPage'
import Todo from '../pages/Todo'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Welcome} />
      <Route path="secondpage" component={SecondPage}/>
      <Route path="todo" component={Todo}/>
    </Route>
  </Router>
);
