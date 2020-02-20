import React, {Component} from 'react';
import classes from './UserOutput.css';

class User extends Component {
    render (){
        console.log('[UserOuput.jsx] rendering...');
        return (
            <div className={classes.UserOutput}>
                <p onClick={this.props.click}>Username: {this.props.username}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.username} />
            </div>        
        );

    }
}

export default User;