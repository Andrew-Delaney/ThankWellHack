import React from 'react';
import { Bell } from 'react-feather';
import { User } from 'react-feather';

import "./HeaderBar.scss";

var HeaderBar = () => (
    <div className="HeaderBar">
        <a href="">Home</a>
        <a href="">Groups</a>
        <a href="">Messages</a>
        <div><Bell/></div>
        <div><User/></div>
    </div>);

export default HeaderBar;