var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundations-sites
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('!style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}/>
      <Route path="countdown" component={Countdown}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
