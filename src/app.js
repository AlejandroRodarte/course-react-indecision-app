const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

// JSX: JavaScript XML -> JavaScript syntax extension
const template = (
    <div>
        <h1>
            { app.title }
        </h1> 
        
        { app.subtitle && <p>{ app.subtitle }</p> }

        <p>
            { app.options.length > 0 ? 'Here are your options' : 'No options' }
        </p>

        <ol>
            <li>
                Item one
            </li>
            <li>
                Item two
            </li>
        </ol>
    </div>
);

let count = 0;
const someId = 'my-id-here';

// add one and render whole template again
const addOne = () => {
    count++;
    renderCounterApp(); 
};

// subtract one and render whole template again
const minusOne = () => {
    count--;
    renderCounterApp();
};

// reset counter and render whole template again
const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

// render the app; define template and render
const renderCounterApp = () => {

    // JSX elements can have regular HTML attributes, however, some change like 'class' which changes
    // to 'className' since it is a reserved keyword

    // HTML attributes can be dynamic and receive a javascript expression

    // onClick is a custom React attribute which can accept a function expression
    const templateTwo = (
        <div>
            <h1>
                Count: { count }
            </h1>
            <button id={ someId } 
                    className="button"
                    onClick={ addOne }>
                +1
            </button>
            <button onClick={ minusOne }>
                -1
            </button>
            <button onClick={ reset }>
                Reset
            </button>
        </div>
    );

    // render template with the ReactDOM
    // two arguments: the JSX template itself and where will it be located (app root div)
    ReactDOM.render(templateTwo, appRoot);

};

// initialize template
renderCounterApp();