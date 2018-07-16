'use strict';

console.log('App.js is running');

//JSX JavaScript XML

var appObj = {
    title: 'Indecision App!!',
    subtitle: 'Yo wassap, this is a subtitle',
    options: ['One', 'Two']
};

var template = React.createElement(
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

// let user = {
//     name: 'Amy',
//     age: 27,
//     location: 'Canada'
// };

// let getLocation = (location) => location ? <p>Location: {location}</p> : undefined;

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
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
            { onClick: addOne },
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
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
