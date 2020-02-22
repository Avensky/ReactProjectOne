import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import { render } from 'react-dom';

class Users extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Users.js] componentDidUpdate');
    console.log(snapshot);  
  }

  componentWillUnmount(){
    console.log('[Users.js] componentWillUnmount')
  }

  render() {
    console.log('[Users.jsx] rendering...');
    return this.props.users.map((user, index) => {
      return (
        <UserOutput
          click={() => this.props.clicked( index )}
          key={user.id}
          username={user.username}
          changed={(event) => this.props.changed(event, user.id)} />
      );
  });
  }
}


export default Users;