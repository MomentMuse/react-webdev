console.log('App.js is running')

//JSX JavaScript XML
let template = <h1>This is JSX from app.js! Does this change?</h1>;
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);