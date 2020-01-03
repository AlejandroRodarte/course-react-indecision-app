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

// object
const user = {
    name: 'Alejandro Rodarte',
    age: 24,
    location: 'Ciudad Juarez'
};

// function to call in our JSX
// functions can actually return JSX code with the embedded location
function getLocation(location) {
    return location ? <p>Location: { location }</p> : undefined;
}

// use regular brackets to inject dynamic data into the template
// javascript expressions are allowed inside
// we can also call functions inside the JSX

// getLocation call can now return JSX code
// if the JSX function returns undefined, nothing will be rendered on the DOM

// booleans and null values are ignored by JSX since they are used by conditional rendering
const templateTwo = (
    <div>
        <h1>
            { user.name ? user.name : 'Anonymous' }
        </h1>

        { (user.age && user.age >= 18) && <p>Age: { user.age }</p> }

        { getLocation(user.location) }
    </div>
);

const appRoot = document.getElementById('app');

// render template with the ReactDOM
// two arguments: the JSX template itself and where will it be located (app root div)
ReactDOM.render(template, appRoot);