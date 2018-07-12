'use strict';

console.log('App.js is running');

//JSX JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App!'
    ),
    React.createElement(
        'p',
        null,
        'Here\'s some info'
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'thing one'
        ),
        React.createElement(
            'li',
            null,
            'thing two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Amy'
    ),
    React.createElement(
        'p',
        null,
        'Age: 27'
    ),
    React.createElement(
        'p',
        null,
        'Location: Ottawa'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
