import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    //let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    let btnClass = '';

    if (props.showUsers) {
        btnClass = classes.Red;
    }

    if (props.users.length <= 2) {
        assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.users.length <= 1) {
        assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>
                Show Users
            </button>
        </div>
    )
}

export default cockpit;