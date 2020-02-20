import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import { render } from 'react-dom';

class Users extends Component {
//  static getDerivedStateFromProps(props, state) {
//    console.log('[Users.jsx] getDerivedStateFromProps');
//    return state;
//  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Users.jsx] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Users.jsx] getSnapShotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Users.js] componentDidUpdate');
    console.log(snapshot);  
  }

  render() {
    console.log('[User.jsx] rendering...');
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