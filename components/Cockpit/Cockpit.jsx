import React , {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated)

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        //setTimeout(() => {
        //   alert('Save data to cloud!');
        //}, 1000);
        toggleBtnRef.current.click();
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

    if (props.usersLength <= 2) {
        assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.usersLength <= 1) {
        assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>
                Show Users
            </button>
            <button onClick={authContext.login}>Log in!</button>
        </div>
    )
}

export default React.memo(cockpit);