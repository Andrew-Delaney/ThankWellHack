import React from 'react';
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import ThanksComposer from '../ThanksComposer/ThanksComposer';
import MyGroups from '../MyGroups/MyGroups';

const Homepage = () => (
    <div className="Homepage row">
        <div className="Homepage-left col-6">
            <ThanksComposer/>
            <MyGroups/>
        </div>
        <div className="col-6">
            <ActivityFeed/>
        </div>
    </div>
);


export default Homepage;
