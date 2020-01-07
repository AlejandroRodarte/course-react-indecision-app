import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {

    state = {
        options: []
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (option) => {
        this.setState((prevState) => ({ options: prevState.options.filter(value => option !== value) }))
    }

    handlePick = () => {
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
    }

    handleAddOption = (option) => {

        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) !== -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));

    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options')) || [];
            this.setState(() => ({ options }));
        } catch (e) {
            // noop
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.options.length - prevState.options.length !== 0) {
            localStorage.setItem('options', JSON.stringify(this.state.options));
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {

        const subtitle = 'Put your life in the hands of a computer';

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