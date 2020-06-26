import React from 'react';

import "./Notification.scss";

var Notification = ({image, text}) => (
    <div className="Notification">
        <img className="Notification-image" src={image} alt="user profile"/>
        <div className="Notification-text">{text}</div>
    </div>
);

export default Notification