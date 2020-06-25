import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HeaderBar from './components/HeaderBar/HeaderBar';
import Homepage from './components/Homepage/Homepage';
import ThanksReceiver from "./components/ThanksReceiver/ThanksReceiver";

import "./App.scss";

const App = () => {
    return (
        <Router>
            <div className="App">
                <HeaderBar/>
                <Switch>
                    <Route path="/messages"/>
                    <Route path="/groups"/>
                    <Route path="/thanks/:id" component={ThanksReceiver}/>
                    <Route path="/"><Homepage/></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
