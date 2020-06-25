import React from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from './components/Homepage/Homepage';

import "./App.scss";

var App = () => {
  return (
    <Router>
      <div className="App">
          <HeaderBar/>
          <Switch>
            <Route path="/"><Homepage/></Route>
            <Route path="/messages"></Route>
            <Route path="/groups"></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
