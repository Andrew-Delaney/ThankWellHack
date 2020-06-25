import React from 'react';
import { Bell } from 'react-feather';
import { User } from 'react-feather';
import { Link } from 'react-router-dom';

import "./HeaderBar.scss";

var HeaderBar = () => (
    <div className="HeaderBar">
        <Link to="/">Home</Link>
        <Link to="/groups">Groups</Link>
        <Link to="/messages">Messages</Link>
        <div><Bell/></div>
        <div><User/></div>
    </div>);

export default HeaderBar;