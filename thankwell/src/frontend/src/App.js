import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HeaderBar from './components/HeaderBar/HeaderBar';
import Homepage from './components/Homepage/Homepage';
import ThanksReceiver from "./components/ThanksReceiver/ThanksReceiver";
import GiveThanks from './components/GiveThanks/GiveThanks';
import Footer from "./components/Footer/Footer";
import UserProfile from './components/UserProfile/UserProfile';

import "./App.scss";
import MyGroups from './components/MyGroups/MyGroups';


const App = () => {
    return (
        <Router>
            <div className="App d-flex flex-column justify-content-between">
                <div className="mb-4">
                    <HeaderBar/>
                    <div className="mb-4 ml-5 mr-5">
                        <Switch>
                            <Route path="/messages"/>
                            <Route path="/groups"/>
                            <Route path="/thanks/:id" component={ThanksReceiver}/>
                            <Route path="/give-thanks"><GiveThanks/></Route>
                            <Route path="/profile"><UserProfile/></Route>
                            <Route path="/usergroups"><MyGroups/></Route>
                            <Route path="/"><Homepage/></Route>
                        </Switch>
                    </div>
                </div>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
