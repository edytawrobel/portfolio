import React from 'react';

export default class AddOption extends React.Component {

    state = {
        error: undefined
    };

    // we don't need to do that this way anymore as we have transform class properties preset
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.state = {
    //          error: undefined
    //     };    
    // }
    
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" placeholder="your option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

