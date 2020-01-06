'use strict';

var appRoot = document.getElementById('app');

var toggle = false;

var onToggle = function onToggle() {
    toggle = !toggle;
    render();
};

var render = function render() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { type: 'button',
                onClick: onToggle },
            toggle ? 'Hide details' : 'Show details'
        ),
        toggle && React.createElement(
            'p',
            null,
            ' ',
            'This is some secret info dawg',
            ' '
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
