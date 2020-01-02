// JSX: JavaScript XML -> JavaScript syntax extension
const template = <h1>Does this change?</h1>;

const appRoot = document.getElementById('app');

// render template with the ReactDOM
// two arguments: the JSX template itself and where will it be located (app root div)
ReactDOM.render(template, appRoot);