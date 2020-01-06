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

var count = 0;
var someId = 'my-id-here';

// add one and render whole template again
var addOne = function addOne() {
    count++;
    renderCounterApp();
};

// subtract one and render whole template again
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

// reset counter and render whole template again
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

// render the app; define template and render
var renderCounterApp = function renderCounterApp() {

    // JSX elements can have regular HTML attributes, however, some change like 'class' which changes
    // to 'className' since it is a reserved keyword

    // HTML attributes can be dynamic and receive a javascript expression

    // onClick is a custom React attribute which can accept a function expression
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { id: someId,
                className: 'button',
                onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );

    // render template with the ReactDOM
    // two arguments: the JSX template itself and where will it be located (app root div)
    ReactDOM.render(templateTwo, appRoot);
};

// initialize template
renderCounterApp();
