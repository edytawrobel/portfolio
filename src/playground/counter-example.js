let count = 0;
const addOne = () => {
    console.log('added!');
    count++;
    renderCountApp();
};

const minusOne = () => {
    console.log('minusOne');
    count--;
    renderCountApp();
}

const reset = () => {
    console.log('back to zero');
    count = 0;
    renderCountApp();
}

const appRoot = document.getElementById('app');

const renderCountApp = () => {
    let templateTwo = (
        <div>
            <h1>Count: { count }</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCountApp();

