'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};

// JSX: JavaScript XML -> JavaScript syntax extension
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
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

// string variable
var username = 'Alejandro Rodarte';

// numeric variable
var age = 24;

// another string variable
var userLocation = 'Ciudad Juarez';

// object
var user = {
    name: 'Alejandro Rodarte',
    age: 24,
    location: 'Ciudad Juarez'
};

// use regular brackets to inject dynamic data into the template
// javascript expressions are allowed inside
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

// render template with the ReactDOM
// two arguments: the JSX template itself and where will it be located (app root div)
ReactDOM.render(template, appRoot);
