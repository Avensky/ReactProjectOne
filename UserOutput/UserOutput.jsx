import React from 'react';
import './UserOutput.css';

const user = ( props ) => {
    return (
        <div className="UserOutput">
            <p onClick={props.click}>Username: {props.username}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.username} />
        </div>        
    );
};

export default user;