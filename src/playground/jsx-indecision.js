const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

// form submission handler
const onFormSubmit = (e) => {

    e.preventDefault();

    // e.target: get event target element (form)
    // elements: get form elements
    // option: get input with name 'option'
    // value: get input value of the 'option' input
    const option = e.target.elements.option.value;

    // option was provided: push into object array and clear input
    // also, re-render
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptionsApp();
    }

};

// remove all options click event handler
const onRemoveAll = () => {
    app.options = [];
    renderOptionsApp();
};

const onMakeDecision = () => {
    alert(app.options[Math.floor(Math.random() * app.options.length)]);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderOptionsApp = () => {

    const template = (
        <div>
            <h1>
                { app.title }
            </h1> 
            
            { app.subtitle && <p>{ app.subtitle }</p> }
    
            <p>
                { app.options.length > 0 ? 'Here are your options' : 'No options' }
            </p>
    
            <button onClick={ onMakeDecision }
                    disabled={ app.options.length === 0 }>
                What should I do?
            </button>

            <button type="button" onClick={ onRemoveAll }>
                Remove All
            </button>
    
            <ol>
                {
                    app.options.map(option => <li key={ option }> { option } </li>)
                }
            </ol>
    
            <form onSubmit={ onFormSubmit }>
                <input type="text" name="option"/>
    
                <button>
                    Add Option
                </button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

};

renderOptionsApp();