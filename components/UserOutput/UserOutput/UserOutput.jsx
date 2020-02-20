import React from 'react';
import classes from './UserOutput.css';

const user = ( props ) => {
    console.log('[UserOuput.jsx] rendering...');
    return (
        <div className={classes.UserOutput}>
            <p onClick={props.click}>Username: {props.username}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.username} />
        </div>        
    );
};

export default user;