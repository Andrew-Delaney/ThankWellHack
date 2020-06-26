import React from 'react';

import "./GroupCard.scss";

var GroupCard = ({image, name}) => (
    <div className="GroupCard col-4">
        <img className="GroupCard-image" src={image} alt="group"></img>
        <text className="GroupCard-name">{name}</text>
    </div>
);

export default GroupCard