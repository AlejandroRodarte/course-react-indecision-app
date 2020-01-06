// convert and ES6 regular class into a react component class
class Header extends React.Component {

    // required method: what to render? must return some JSX
    render() {
        return (
            <div>
                <h1>
                    Indecision
                </h1>
                <h2>
                    Put your life in the hands of a computer
                </h2>
            </div>
        );
    }

}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button>
                    What should I do?
                </button>
            </div>
        );
    }

}

class Options extends React.Component {

    render() {
        return (
            <div>
                <p>Options component here</p>
            </div>
        );
    }

}

class AddOption extends React.Component {

    render() {
        return (
            <div>
                <p>AddOption component here</p>
            </div>
        );
    }

}

// JSX: <Header/> as custom HTML element to place a React component into the DOM
const jsx = (
    <div>
        <h1>
            Title
        </h1>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));