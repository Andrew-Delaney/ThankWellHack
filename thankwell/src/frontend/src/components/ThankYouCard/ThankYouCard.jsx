import React from 'react';

var ThankYouCard = ({ image, message, recipient }) => (
    <div className="ThankYouCard">
        <image className="ThankYouCard-image" src={image}></image>
        <div className="ThankYouCard-recipient">{recipient}</div>
        <div className="ThankYouCard-message">{message}</div>
    </div>
);

export default ThankYouCard