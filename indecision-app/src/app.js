console.log('App.js is running')

//JSX JavaScript XML

let appObj = {
    title: 'Indecision App!!',
    subtitle: 'This is a cool subtitle'
}

const template = (
    <div>
        <h1>{appObj.title}</h1> 
        <p>{appObj.subtitle}</p>
        <ul>
            <li>thing one</li>
            <li>thing two</li>
        </ul>
    </div>
);

let user = {
    name: 'Amy',
    age: 27,
    location: 'Canada'
};

const templateTwo = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);