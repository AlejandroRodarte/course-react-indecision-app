'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

// form submission handler
var onFormSubmit = function onFormSubmit(e) {

    e.preventDefault();

    // e.target: get event target element (form)
    // elements: get form elements
    // option: get input with name 'option'
    // value: get input value of the 'option' input
    var option = e.target.elements.option.value;

    // option was provided: push into object array and clear input
    // also, re-render
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptionsApp();
    }
};

// remove all options click event handler
var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderOptionsApp();
};

var onMakeDecision = function onMakeDecision() {
    alert(app.options[Math.floor(Math.random() * app.options.length)]);
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var renderOptionsApp = function renderOptionsApp() {

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
            'button',
            { onClick: onMakeDecision,
                disabled: app.options.length === 0 },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { type: 'button', onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    ' ',
                    option,
                    ' '
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderOptionsApp();
