import React, { Component } from 'react';
import './App.css';

import Smurf from './Smurf';
import SmurfList from './SmurfList';
import Form from './Form';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="main-text">SMURFS! 2.0 W/ <span className="redux-span">Redux</span></h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <SmurfList />
        <Form />
      </div>
    );
  }
}

export default App;
