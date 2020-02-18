import React from 'react';
import UserOutput from './UserOutput/UserOutput';

const users = (props) => props.users.map( ( user, index ) => {
    return <UserOutput
      click={() => props.clicked( index )}
      key={user.id}
      username={user.username}
      changed={(event) => props.changed(event, user.id)} />
});

export default users;