import React from 'react';
import classes from './UserOutput.css';

const user = ( props ) => {

    const rnd = Math.random();

    if ( rnd > 0.7 ) {
        throw new Error( 'Something went wrong' );
    }

    return (
        <div className={classes.UserOutput}>
            <p onClick={props.click}>Username: {props.username}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.username} />
        </div>        
    );
};

export default user;