import React, {Component} from "react";
import Tank from "./components/Tanks/Tanks";
import Temp from "./components/Tanks/Temp";
import SignUp from "./components/Tanks/SignUp";
import SignIn from "./components/Tanks/SignIn";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <Router>
      <Switch>
        <Route exact path='/' component={SignUp}/>
        <Route exact path='/login' component={SignIn}/>
        <Route exact path='/tank' component={Tank}/>
        <Route exact path='/temp/:id' component={Temp}/>
      </Switch>
    </Router>
    )
  }
};

export default App;
