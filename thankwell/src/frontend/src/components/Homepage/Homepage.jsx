import React from 'react';
import ThanksComposer from '../ThanksComposer/ThanksComposer';
import Dashboard from "../Dashboard/Dashboard";

const Homepage = ({props}) => (
    <div className="Homepage container container-fluid">
        <props.component/>
    </div>
);


export default Homepage;
