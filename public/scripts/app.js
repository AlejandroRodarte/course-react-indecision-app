// JSX: JavaScript XML -> JavaScript syntax extension
// const template = <p>This is JSX from app.js!</p>;

const template = React.createElement("h1", {
    id: "some-id"
}, "Something new!");

const appRoot = document.getElementById('app');

// render template with the ReactDOM
// two arguments: the JSX template itself and where will it be located (app root div)
ReactDOM.render(template, appRoot);