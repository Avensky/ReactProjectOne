import React, { Component } from 'react';
import classes from './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import Validation from './Validation/Validation';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {
  state = {
    users: [
      {id: 'as', username: "RolyPoly" },
      {id: 'ad', username: "GoldFish" },
      {id: 'af', username: "Tama" }
    ],
    otherState: 'some other value',
    showUsers: false,
    userInput: ''
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
    const doesShow = this.state.showUsers;
    this.setState({showUsers: !doesShow})
  }

  deleteUserHandler = (userIndex) => {
    // const users = this.state.users.slice();
    const users = [...this.state.users];
    users.splice(userIndex, 1);
    this.setState({users:users});
  }

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    let users = null;
    let btnClass = '';
    if ( this.state.showUsers ) {

      users = (
        <div>
          {this.state.users.map((user, index) => {
          return <ErrorBoundary key={user.id}>
            <UserOutput
            click={() => this.deleteUserHandler( index )}
            username={user.username}
            changed={(event) => this.inputnameChangedHandler(event, user.id)} />
          </ ErrorBoundary>
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <UserInput
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

    //let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    if (this.state.users.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (this.state.users.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
          className={btnClass}
          onClick={this.toggleUsersHandler}>
          Show Users
        </button>
        {users}
        <br></br>
        <br></br>
        <input
          type='text'
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
