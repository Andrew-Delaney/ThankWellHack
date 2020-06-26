import React from 'react';

import "./ThankYouCard.scss";
import { Link } from 'react-router-dom';

var ThankYouCard = ({ image, message, recipient, id }) => (
    <div className="ThankYouCard col-10 col-sm-8 col-md-4 col-lg-3">
        <Link to={`/thanks/${id}`}>
            <img className="ThankYouCard-image" src={image} alt="Thank you!"></img>
            <div className="ThankYouCard-text">
                <h5 className="ThankYouCard-text-recipient">{recipient}</h5>
                <div className="ThankYouCard-text-message">{message}</div>
            </div>
        </Link>
    </div>
);

export default ThankYouCard