// nesting react component: parent component renders children react components
class IndecisionApp extends React.Component {

    render() {

        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];

        return (
            <div>
                <Header title={ title } subtitle={ subtitle } />
                <Action />
                <Options options={ options }/>
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
                    { this.props.title }
                </h1>
                <h2>
                    { this.props.subtitle }
                </h2>
            </div>
        );
    }

}

class Action extends React.Component {

    handlePick() {
        alert('handlePick');
    }

    render() {
        return (
            <div>
                <button onClick={ this.handlePick }>
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
                <p> { this.props.optionText } </p>
            </div>
        );
    }

}

class Options extends React.Component {

    // overriding the constructor to never lose the `this` binding
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options);
    }

    render() {
        return (
            <div>
                <button onClick={ this.handleRemoveAll }>
                    Remove all
                </button>
                {
                    this.props.options.map((option, index) => <Option key={ index } optionText={ option } />)
                }
            </div>
        );
    }

}

class AddOption extends React.Component {

    handleAddOption(e) {
        
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option);
            e.target.elements.option.value = '';
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleAddOption }>
                    <input type="text" name="option" />

                    <button>
                        Add Option
                    </button>
                </form>
            </div>
        );
    }

}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));