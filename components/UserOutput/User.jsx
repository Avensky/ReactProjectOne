import React, { PureComponent } from 'react';
import UserOutput from './UserOutput/UserOutput';

class Users extends PureComponent {
 // shouldComponentUpdate(nextProps, nextState) {
 //   console.log('[Users.js] shouldComponentUpdate');
 //   if (
 //     nextProps.users !== this.props.users || 
 //     nextProps.changed !== this.props.changed || 
 //     nextProps.clicked !== this.props.clicked
 //   ){
 //     return true;
 //   } else {
 //     return false;
 //   }
 // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Users.js] getSnapShotBeforeUpdate');
    return {message: 'Snapshot!'};
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Users.js] componentDidUpdate');
    console.log(snapshot);  
  }

  componentWillUnmount(){
    console.log('[Users.js] componentWillUnmount')
  }

  render() {
    console.log('[Users.jsx] rendering...');
    return (this.props.users.map((user, index) => {
      return (
        <UserOutput
          click={() => this.props.clicked( index )}
          key={user.id}
          username={user.username}
          changed={(event) => this.props.changed(event, user.id)}
        />
      );
  }));
  }
}


export default Users;