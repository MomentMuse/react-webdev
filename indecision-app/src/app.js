console.log('App.js is running')

//JSX JavaScript XML

const appObj = {
    title: 'Indecision App!!',
    subtitle: 'Yo wassap, this is a subtitle',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        appObj.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    };
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{appObj.title}</h1> 
            {appObj.subtitle && <p>{appObj.subtitle}</p>}
            <p>{appObj.options.length > 0 ? 'Here are your options!' : 'No options, sorry'}</p>
            <p>{appObj.options.length}</p>
            <ul>
                <li>thing one</li>
                <li>thing two</li>
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();

//create render function that renders new jsx
//call it right away
//call it after options array is added to