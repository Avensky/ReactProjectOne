import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      {id: 'as', username: "RolyPoly" },
      {id: 'ad', username: "GoldFish" },
      {id: 'af', username: "Tama" }
    ],
    otherState: 'some other value',
    showUsers: false
    }

  inputnameChangedHandler = (event, id) => {
    const userIndex = this.state.users.findIndex(u => {
      return u.id === id;
    });

    const user = {
      ...this.state.users[userIndex]
    };
    //const user = object.assign({}, this.state.users[userIndex])

    user.username = event.target.value;

    const users = [...this.state.users];
    users[userIndex] = user;
    
    this.setState({users: users});
  }

  toggleUsersHandler = () => {
    const doesShow = this.state.show;
    this.setState({showUsers: !doesShow})
  }

  deleteUserHandler = (userIndex) => {
    // const users = this.state.users.slice();
    const users = [...this.state.users];
    users.splice(userIndex, 1);
    this.setState({users:users});
  }

  render() {
    let users = null;
    
    if ( this.state.showUsers ) {
      users = (
        <div>
          {this.state.users.map((user, index) => {
          return <UserOutput
            click={() => this.deleteUserHandler(index)}
            username={user.username}
            key={user.id}
            changed={(event) => this.inputnameChangedHandler(event, user.id)}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <button 
          onClick={this.toggleUsersHandler}>
          Show Users
        </button>
        {users}
      </div>
    );
  }
}

export default App;
