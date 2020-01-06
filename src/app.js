// nesting react component: parent component renders children react components
class IndecisionApp extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            options: props.options
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption(option) {
        this.setState((prevState) => ({ options: prevState.options.filter(value => option !== value) }))
    }

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
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));

    }

    render() {

        const subtitle = 'Put your life in the hands of a computer';

        // for children to manipulate parent data (upstream flow) pass down functions as regular props
        return (
            <div>

                <Header subtitle={ subtitle } />

                <Action 
                    hasOptions={ this.state.options.length > 0 }
                    handlePick={ this.handlePick }
                />

                <Options 
                    options={ this.state.options }
                    handleDeleteOptions={ this.handleDeleteOptions }
                    handleDeleteOption={ this.handleDeleteOption }
                />
                
                <AddOption 
                    handleAddOption={ this.handleAddOption }
                />

            </div>
        );

    }

}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>
                { props.title }
            </h1>
            { props.subtitle && <h2> { props.subtitle } </h2> }
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={ props.handlePick }
                disabled={ !props.hasOptions }
            >
                What should I do?
            </button>
        </div>
    ); 
};

const Option = (props) => {
    return (
        <div>
            <p> { props.optionText } </p>

            <button 
                onClick={ (e) => props.handleDeleteOption(props.optionText) }>
                Remove
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={ props.handleDeleteOptions }>
                Remove all
            </button>
            {
                props.options.map((option, index) => (
                    <Option 
                        key={ index } 
                        optionText={ option }
                        handleDeleteOption={ props.handleDeleteOption }
                    />
                ))
            }
        </div>
    );
};

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
        this.setState(() => ({ error }));

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

// stateless functional component syntax
// const User = (props) => {
//     return (
//         <div>
//             <p>
//                 Name: { props.name }
//             </p>
//             <p>
//                 Age: { props.age }
//             </p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));