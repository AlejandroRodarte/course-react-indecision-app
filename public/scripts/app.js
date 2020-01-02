'use strict';

// JSX: JavaScript XML -> JavaScript syntax extension
var template = React.createElement(
  'h1',
  null,
  'Does this change?'
);

var appRoot = document.getElementById('app');

// render template with the ReactDOM
// two arguments: the JSX template itself and where will it be located (app root div)
ReactDOM.render(template, appRoot);
