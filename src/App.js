import React from "react";
import Tanks from "./components/Tanks/Tanks";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
  <>

    
      <Switch>
        <Route exact path='/' component={Tanks}/>
        {/* <Route exact path='/books' component={Books}/>
        <Route exact path='/books/:id' component={Detail}/>
        <Route component={NoMatch} /> */}
      </Switch>
 
  </>
    </Router>
  );
}

export default App;
