import React , {useEffect, useState} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('Save data to cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.jsx] cleanup work is in 2nd useEffect');
        };
    });

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