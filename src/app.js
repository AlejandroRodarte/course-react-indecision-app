// JSX: JavaScript XML -> JavaScript syntax extension
const template = (
    <div>
        <h1>
            Does this change?
        </h1> 
        
        <p>
            This is some info
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

const templateTwo = (
    <div>
        <h1>
            Alejandro Rodarte
        </h1>

        <p>
            Age: 24
        </p>

        <p>
            Location: Ciudad Juarez
        </p>
    </div>
);

const appRoot = document.getElementById('app');

// render template with the ReactDOM
// two arguments: the JSX template itself and where will it be located (app root div)
ReactDOM.render(templateTwo, appRoot);