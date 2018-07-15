class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision app';
        const subtitle = 'Put your life in the hands of a computer';
        const options = [' thing one ', 'thing two ', 'thing three '];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>        
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('woohaa!');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    } 
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options);
        alert('removed');
    }

    render() {
        return (
            <div>
            <ul> Options: 
            {
                this.props.options.map((option) => {
                    return <Option key={option} optionText={option} />
                }
            )
        }
        </ul>
        <button onClick={this.handleRemoveAll}>Remove All</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>{this.props.optionText}</p>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if(option) {
            alert(option);
        } else {
            alert('no option provided!');
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" placeholder="your option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));