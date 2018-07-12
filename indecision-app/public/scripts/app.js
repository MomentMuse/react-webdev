'use strict';

console.log('App.js is running');

//JSX JavaScript XML

var appObj = {
    title: 'Indecision App!!',
    subtitle: 'This is a cool subtitle'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObj.title
    ),
    React.createElement(
        'p',
        null,
        appObj.subtitle
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

var user = {
    name: 'Amy',
    age: 27,
    location: 'Canada'
};

var getLocation = function getLocation(location) {
    return location ? React.createElement(
        'p',
        null,
        'Location: ',
        location
    ) : undefined;
};

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

ReactDOM.render(templateTwo, appRoot);
