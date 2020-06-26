import React from 'react';
import Notification from '../Notification/Notification';
import Barista from "../../assets/barista.png";

import "./Notifications.scss";

var Notifications = () => {
    var notifications = [
        {image: Barista, text: "Average size notification"},
        {image: Barista, text: "Short notification"},
        {image: Barista, text: "Really very very extra long notification of great length, making all other notifications look inferior simply by the number of characters present"},
        {image: Barista, text: "A shorter notification than the previous, but of reasonable length nonetheless"},
        {image: Barista, text: "Notification the V"}
    ]

    return (
    <div className="Notifications">
        {
            notifications && notifications.map((notification, index) =>
                <Notification key={index} image={notification.image} text={notification.text}/>
            )
        }
    </div>
)};

export default Notifications