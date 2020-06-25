import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HeaderBar from './components/HeaderBar/HeaderBar';
import Homepage from './components/Homepage/Homepage';
import ThanksReceiver from "./components/ThanksReceiver/ThanksReceiver";
import GiveThanks from './components/GiveThanks/GiveThanks';

import "./App.scss";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <Router>
            <div className="App d-flex flex-column justify-content-between">
                <div className="mb-4">
                    <HeaderBar/>
                    <div className="container container-fluid">
                        <Switch>
                            <Route path="/messages"/>
                            <Route path="/groups"/>
                            <Route path="/thanks/:id" component={ThanksReceiver}/>
                            <Route path="/give-thanks"><GiveThanks/></Route>
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
