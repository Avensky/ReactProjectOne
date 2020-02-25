import React, {Component} from 'react';
import classes from './UserOutput.css';
import Auxilary from '../../../hoc/Auxilary';
import Aux from '../../../hoc/Auxilary';
class User extends Component {
    render (){
        console.log('[UserOuput.jsx] rendering...');
        return (
        <Aux>
            <p key="i1" onClick={this.props.click}>
                Username: {this.props.username}
            </p>,
            <p key="i2">{this.props.children}</p>,
            <input 
                key="i3"
                type="text" 
                onChange={this.props.changed} 
                value={this.props.username} 
            />        
        </Aux>)
        ;
    }
}

export default User;