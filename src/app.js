// nesting react component: parent component renders children react components
class IndecisionApp extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }

}

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

class Option extends React.Component {

    render() {
        return (
            <div>
                <p>Option component here</p>
            </div>
        );
    }

}

class Options extends React.Component {

    render() {
        return (
            <div>
                <Option />
                <Option />
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));