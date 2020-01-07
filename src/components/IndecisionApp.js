import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

// nesting react component: parent component renders children react components
export default class IndecisionApp extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            options: []
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

    }

    // ngOnInit
    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options')) || [];
            this.setState(() => ({ options }));
        } catch (e) {
            // noop
        }
    }

    // ngOnChanges
    componentDidUpdate(prevProps, prevState) {
        if (this.state.options.length - prevState.options.length !== 0) {
            localStorage.setItem('options', JSON.stringify(this.state.options));
        }
    }

    // ngOnDestroy
    componentWillUnmount() {
        console.log('componentWillUnmount');
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