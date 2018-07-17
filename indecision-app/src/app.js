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
    }
}

const onRemoveAll = () => {
    appObj.options = [];
    renderApp();
}

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderApp = () => {
    const template = (
        <div>
            <h1>{appObj.title}</h1> 
            {appObj.subtitle && <p>{appObj.subtitle}</p>}
            <p>{appObj.options.length > 0 ? 'Here are your options!' : 'No options, sorry'}</p>
            <p>{appObj.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            {
                numbers.map((num) => {
                    return <p key={num}>Number: {num}</p>;
                })
            }
            <ol>
                <li>thing one</li>
                <li>thing two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();