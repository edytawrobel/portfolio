import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <ul> Your Options: 
        {
            props.options.map((option) => (
                <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
                    />
            ))
        }
        </ul>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
)

export default Options;