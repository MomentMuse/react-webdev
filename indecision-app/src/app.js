console.log('App.js is running')

//JSX JavaScript XML

const appObj = {
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
        <form>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);