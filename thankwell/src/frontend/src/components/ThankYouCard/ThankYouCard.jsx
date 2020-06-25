import React from 'react';

import "./ThankYouCard.scss";

var ThankYouCard = ({ image, message, recipient }) => (
    <div className="ThankYouCard">
        <img className="ThankYouCard-image" src={image} alt="Thank you!"></img>
        <div className="ThankYouCard-text">
            <h5 className="ThankYouCard-text-recipient">{recipient}</h5>
            <div className="ThankYouCard-text-message">{message}</div>
        </div>
    </div>
);

export default ThankYouCard