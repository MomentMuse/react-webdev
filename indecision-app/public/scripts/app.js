'use strict';

console.log('App.js is running');

//JSX JavaScript XML

var appObj = {
    title: 'Indecision App!!',
    subtitle: 'Yo wassap, this is a subtitle',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        appObj.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var onRemoveAll = function onRemoveAll() {
    appObj.options = [];
    renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
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
            'p',
            null,
            appObj.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
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

renderApp();
