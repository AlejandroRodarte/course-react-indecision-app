'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
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
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
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

// object
var user = {
    name: 'Alejandro Rodarte',
    age: 24,
    location: 'Ciudad Juarez'
};

// function to call in our JSX
// functions can actually return JSX code with the embedded location
function getLocation(location) {
    return location ? React.createElement(
        'p',
        null,
        'Location: ',
        location
    ) : undefined;
}

// use regular brackets to inject dynamic data into the template
// javascript expressions are allowed inside
// we can also call functions inside the JSX

// getLocation call can now return JSX code
// if the JSX function returns undefined, nothing will be rendered on the DOM

// booleans and null values are ignored by JSX since they are used by conditional rendering
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

// render template with the ReactDOM
// two arguments: the JSX template itself and where will it be located (app root div)
ReactDOM.render(template, appRoot);
