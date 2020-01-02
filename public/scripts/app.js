'use strict';

// JSX: JavaScript XML -> JavaScript syntax extension
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Does this change?'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Alejandro Rodarte'
    ),
    React.createElement(
        'p',
        null,
        'Age: 24'
    ),
    React.createElement(
        'p',
        null,
        'Location: Ciudad Juarez'
    )
);

var appRoot = document.getElementById('app');

// render template with the ReactDOM
// two arguments: the JSX template itself and where will it be located (app root div)
ReactDOM.render(templateTwo, appRoot);
