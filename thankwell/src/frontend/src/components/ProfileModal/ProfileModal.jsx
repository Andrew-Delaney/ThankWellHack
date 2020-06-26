import React from 'react';
import { Link } from 'react-router-dom';

import "./ProfileModal.scss";

var ProfileModal = () => (
    <div className="ProfileModal">
        <Link className="ProfileModal-edit" to="/">Edit Profile</Link>
        <Link className="ProfileModal-exit" to="/">Sign Out</Link>
    </div>
);

export default ProfileModal