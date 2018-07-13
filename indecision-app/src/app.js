console.log('App.js is running')

//JSX JavaScript XML

let appObj = {
    title: 'Indecision App!!',
    subtitle: 'Yo wassap, this is a subtitle',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{appObj.title}</h1> 
        {appObj.subtitle && <p>{appObj.subtitle}</p>}
        <p>{appObj.options.length > 0 ? 'Here are your options!' : 'No options, sorry'}</p>
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

let getLocation = (location) => location ? <p>Location: {location}</p> : undefined;

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);