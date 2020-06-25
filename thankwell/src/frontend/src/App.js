import React from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

var App = () => {
  return (
    <Router>
      <div className="App">
        <HeaderBar/>
      </div>
      <Switch>
        <Route path="/"></Route>
        <Route path="/messages"></Route>
        <Route path="/groups"></Route>
      </Switch>
    </Router>
  );
}

export default App;
