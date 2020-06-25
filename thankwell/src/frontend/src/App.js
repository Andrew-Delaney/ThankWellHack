import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HeaderBar from './components/HeaderBar/HeaderBar';
import Homepage from './components/Homepage/Homepage';
import ThanksReceiver from "./components/ThanksReceiver/ThanksReceiver";

import "./App.scss";
import ThanksComposer from "./components/ThanksComposer/ThanksComposer";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
    return (
        <Router>
            <div className="App">
                <HeaderBar/>
                <Switch>
                    <Route path="/messages"/>
                    <Route path="/groups"/>
                    <Route path="/thanks/:id" component={ThanksReceiver}/>
                    <Route path="/give-thanks"><Homepage props={{component: ThanksComposer}}/></Route>
                    <Route path="/"><Homepage props={{component: Dashboard}}/></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
