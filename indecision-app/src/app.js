console.log('App.js is running')

//JSX JavaScript XML
const template = (
    <div>
        <h1>Indecision App!</h1> 
        <p>Here's some info</p>
        <ul>
            <li>thing one</li>
            <li>thing two</li>
        </ul>
    </div>
);

const templateTwo = (
    <div>
        <h1>Amy</h1>
        <p>Age: 27</p>
        <p>Location: Ottawa</p>
    </div>
)

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);