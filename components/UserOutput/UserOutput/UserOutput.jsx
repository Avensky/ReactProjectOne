import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './UserOutput.css';
import Auxilary from '../../../hoc/Auxilary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class User extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render (){
        console.log('[UserOuput.jsx] rendering...');
        return (
        <Auxilary>
            {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
            <p key="i1" onClick={this.props.click}>
                Username: {this.props.username}</p>
            <p key="i2">{this.props.children}</p>
            <input 
                key="i3"
                //ref={(inputEl) => {this.inputElement = inputEl}}
                ref = {this.inputElementRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.username} 
            />        
        </Auxilary>)
        ;
    }
}

User.propTypes = {
    click: PropTypes.func,
    username: PropTypes.string,
    changed: PropTypes.func,

};

export default withClass(User, classes.UserOutput);