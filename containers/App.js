import React, { Component } from 'react';
import classes from './App.css';
//import UserOutput from '../components/UserOutput/UserOutput/UserOutput';
import UserInput from '../components/UserInput/UserInput';
import Validation from '../components/Validation/Validation';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Users from '../components/UserOutput/User';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxilary from '../hoc/Auxilary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
   
  state = {
    users: [
      {id: 'as', username: "RolyPoly" },
      {id: 'ad', username: "GoldFish" },
      {id: 'af', username: "Tama" }
    ],
    otherState: 'some other value',
    showUsers: false,
    userInput: '',
    showCockpit: true,
    changedCounter: 0,
    authenticated: false
    }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }


  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }
/*
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[App.js] getSnapShotBeforeUpdate');
    return {message: 'Snapshot!'};
  }
*/
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
    
    this.setState((prevState, props) => {
      return{
        users: users, 
        changedCounter: prevState.changedCounter + 1
      };  
    });
  };

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

  loginHandler = () => {
    this.setState({authenticated: true})
  };

  render() {
    console.log('[App.js] render');
    let users = null;
    if ( this.state.showUsers ) {
      users = <Users 
            users={this.state.users}  
            clicked={this.deleteUserHandler}
            changed={this.inputnameChangedHandler}
            isAuthenticated={this.state.authenticated}
          />
    }

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <UserInput
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <Auxilary>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}>Remove Cockpit</button>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated, 
            login: this.loginHandler
          }}>
        {this.state.showCockpit ? (
          <Cockpit 
            title={this.props.appTitle}
            showUsers={this.state.showUsers}
            usersLength={this.state.users.length} 
            clicked={this.toggleUsersHandler}
          /> 
          ) : null}
          {users}
        </AuthContext.Provider>
        <br></br>
        <br></br>
        <input
          type='text'
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </Auxilary>
    );
  }
}

export default withClass(App, classes.App);
