console.log('app is running');

const app = {
    title: 'Indecision app',
    subtitle: 'we are going to help you with your decision making!',
    //subtitle: null,
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    };
};

const removeAll = () => {
    app.options = [];
    renderTemplate();
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const randomOption = app.options[randomNum];
    alert(randomOption);
}

const appRoot = document.getElementById('app');

const renderTemplate = () => {

    let template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options: ' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button id="remover" onClick={removeAll}>Remove All</button>
            <ol> 
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>
                })
            }
            </ol>
            <p>{app.options.length}</p>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Submit</button>
            </form>
        </div>
    )    
    ReactDOM.render(template, appRoot);
};

renderTemplate();