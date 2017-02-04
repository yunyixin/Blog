import {Router, Route, IndexRoute, hashHistory as history} from 'react-router';
import {
  Register,
  Login,
  Home
} from './container';

module.exports = (
  <Router history={history}>
    <Route path="/" component={Home}>
      <IndexRoute component={Home}/>
    </Route>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
  </Router>
);