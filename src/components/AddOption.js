import React from 'react';

export default class AddOption extends React.Component {

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

        if (!error) {
            e.target.elements.option.value = '';
        }

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