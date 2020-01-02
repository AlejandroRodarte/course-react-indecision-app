const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};

// JSX: JavaScript XML -> JavaScript syntax extension
const template = (
    <div>
        <h1>
            { app.title }
        </h1> 
        
        <p>
            { app.subtitle }
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

// string variable
const username = 'Alejandro Rodarte';

// numeric variable
const age = 24;

// another string variable
const userLocation = 'Ciudad Juarez';

// object
const user = {
    name: 'Alejandro Rodarte',
    age: 24,
    location: 'Ciudad Juarez'
};

// use regular brackets to inject dynamic data into the template
// javascript expressions are allowed inside
const templateTwo = (
    <div>
        <h1>
            { user.name }
        </h1>

        <p>
            Age: { user.age }
        </p>

        <p>
            Location: { user.location }
        </p>
    </div>
);

const appRoot = document.getElementById('app');

// render template with the ReactDOM
// two arguments: the JSX template itself and where will it be located (app root div)
ReactDOM.render(template, appRoot);