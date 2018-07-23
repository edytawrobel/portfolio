import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
                options: prevState.options.filter(((option) =>  optionToRemove !== option
                ))   
        }));
    }

    handlePick = () =>  {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const randomOption = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: randomOption
        }));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
            // that means we already found a match for this option, it exists and we don't want duplicates
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    render() {
        const title = 'Indecision app';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}/>
                        <AddOption 
                            handleAddOption={this.handleAddOption}/>
                    </div>
                    <OptionModal 
                        selectedOption={this.state.selectedOption}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                    />
                </div>
            </div>
        )
    }
}

export default IndecisionApp;