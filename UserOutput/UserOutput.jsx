import React from 'react';
import './UserOutput.css';
import Radium from 'radium';

const user = ( props ) => {
    const style = {
        '@media (min-width:500px)': {
            width: '450px'
        }
    }
    return (
        <div className="UserOutput" style={style}>
            <p onClick={props.click}>Username: {props.username}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.username} />
        </div>        
    );
};

export default Radium(user);