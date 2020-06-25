import React from 'react';
import { Bell } from 'react-feather';
import { User } from 'react-feather';
import { Link } from 'react-router-dom';

import "./HeaderBar.scss";

var HeaderBar = () => (
    <div className="HeaderBar">
        <Link className="HeaderBar-link" to="/">Home</Link>
        <Link className="HeaderBar-link" to="/give-thanks">Give Thanks</Link>
        <Link className="HeaderBar-link" to="/groups">Groups</Link>
        <Link className="HeaderBar-link" to="/messages">Messages</Link>
        <div className="HeaderBar-icon"><Bell/></div>
        <div className="HeaderBar-icon"><User/></div>
    </div>
);

export default HeaderBar;
