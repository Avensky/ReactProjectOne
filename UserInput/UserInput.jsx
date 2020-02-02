import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid blue'
    };
    
    return <input 
        type="text"
        style={inputStyle}
        onChange={props.change} 
        value={props.currentName}/>;
};

export default userInput;