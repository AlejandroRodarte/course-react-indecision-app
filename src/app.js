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

const appRoot = document.getElementById('app');

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
    
            <p>
                { app.options.length }
            </p>

            <button type="button" onClick={ onRemoveAll }>
                Remove All
            </button>
    
            <ol>
                <li>
                    Item one
                </li>
                <li>
                    Item two
                </li>
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