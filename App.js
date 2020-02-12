import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { username: "RolyPoly" },
      { username: "GoldFish" },
      { username: "Tama" }
    ],
    otherState: 'some other value',
    showUsername: false
    }

  inputnameChangeHandler = (event) => {
    this.setState({username: event.target.value})
  }

  toggleUsernameHandler = () => {
    const doesShow = this.state.showUsername;
    this.setState({showUsername: !doesShow})
  }

  deleteUserHandler = (userIndex) => {
    // const users = this.state.users.slice();
    const users = [...this.state.users];
    users.splice(userIndex, 1);
    this.setState({users:users});
  }

  render() {
    let users = null;
    
    if ( this.state.showUsername ) {
      users = (
        <div>
          {this.state.users.map((users, index) => {
          return <UserInput 
            change={this.inputnameChangeHandler}
            currentName={users.username}
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
          onClick={this.toggleUsernameHandler}>
            Switch Name
          </button>
          {users}
        {this.state.users.map((users, index) => {
          return <UserOutput
            click={() => this.deleteUserHandler(index)}
            username={users.username}
          />
        })}
        <UserOutput username="Bodhi"></UserOutput>
      </div>
    );
  }
}

export default App;
