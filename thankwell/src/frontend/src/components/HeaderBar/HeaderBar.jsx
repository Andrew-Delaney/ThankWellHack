import React, {useState} from 'react';
import {Bell, User} from 'react-feather';
import {Link} from 'react-router-dom';
import logo from "../../assets/logo.png";
import "./HeaderBar.scss";
import Notifications from '../Notifications/Notifications';
import ProfileModal from '../ProfileModal/ProfileModal';

const HeaderBar = () => {
    const [notificationModalActive, setNotificationModalActive] = useState(false);
    const [userProfileModalActive, setUserProfileModalActive] = useState(false);

    return (
    <div className="HeaderBar">
        <div className="d-flex flex-row justify-content-between w-100">
            <Link to="/" className="logo-link"><img src={logo} alt="logo" className="logo"/></Link>
            <div className="d-flex links">
                <Link className="HeaderBar-link" to="/">Home</Link>
                <Link className="HeaderBar-link" to="/give-thanks">Give Thanks</Link>
                <Link className="HeaderBar-link" to="/usergroups">Groups</Link>
                <Link className="HeaderBar-link" to="/messages">Messages</Link>
                <div className="HeaderBar-icon"><Bell onClick={() => setNotificationModalActive(!notificationModalActive)}/></div>
                <div className="HeaderBar-icon"><User onClick={() => setUserProfileModalActive(!userProfileModalActive)}/></div>
            </div>
        </div>
        {notificationModalActive && <Notifications/>}
        {userProfileModalActive && <ProfileModal modalToggle={() => setUserProfileModalActive(false)}/>}
    </div>
)};

export default HeaderBar;
