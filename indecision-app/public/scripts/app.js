'use strict';

console.log('App.js is running');

//JSX JavaScript XML

const appObj = {
    title: 'Indecision App!!',
    subtitle: 'Yo wassap, this is a subtitle',
    options: ['One', 'Two']
};

const template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObj.title
    ),
    appObj.subtitle && React.createElement(
        'p',
        null,
        appObj.subtitle
    ),
    React.createElement(
        'p',
        null,
        appObj.options.length > 0 ? 'Here are your options!' : 'No options, sorry'
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

const user = {
    name: 'Amy',
    age: 27,
    location: 'Canada'
};

const getLocation = function getLocation(location) {
    return location ? React.createElement(
        'p',
        null,
        'Location: ',
        location
    ) : undefined;
};

const templateTwo = React.createElement(
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

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
