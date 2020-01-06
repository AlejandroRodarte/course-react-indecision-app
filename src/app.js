// nesting react component: parent component renders children react components
class IndecisionApp extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            options: []
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    };

    handlePick() {
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
    }

    // we should NEVER mutate (modify) directly the state, so we use concat() instead of push() since
    // it returns a new array
    handleAddOption(option) {

        // returning string to the child if there is a problem
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) !== -1) {
            return 'This option already exists';
        }

        // if no error, function returns undefined
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        });

    }

    render() {

        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        // for children to manipulate parent data (upstream flow) pass down functions as regular props
        return (
            <div>

                <Header title={ title } subtitle={ subtitle } />

                <Action 
                    hasOptions={ this.state.options.length > 0 }
                    handlePick={ this.handlePick }
                />

                <Options 
                    options={ this.state.options }
                    handleDeleteOptions={ this.handleDeleteOptions }
                />
                
                <AddOption 
                    handleAddOption={ this.handleAddOption }
                />

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

    render() {
        return (
            <div>
                <button 
                    onClick={ this.props.handlePick }
                    disabled={ !this.props.hasOptions }
                >
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

    // the child component will use the function referenced passed by the parent
    // to emit events (similar to Angular) and update data
    render() {
        return (
            <div>
                <button onClick={ this.props.handleDeleteOptions }>
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

    constructor(props) {

        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        };

    }

    handleAddOption(e) {
        
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        // accessing the error (if exists, else undefined)
        const error = this.props.handleAddOption(option);

        e.target.elements.option.value = '';

        // set the returned error
        this.setState(() => {
            return { error }
        });

    }

    render() {
        return (
            <div>

                { this.state.error && <p> { this.state.error } </p> }

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