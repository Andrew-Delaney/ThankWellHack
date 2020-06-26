import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import thanksImg from "../../assets/thanks.jpg";

import "./ThankYouCard.scss";


var ThankYouCard = ({ imageId, message, recipient, id }) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (imageId) {
            var getImage = async () => {
                var imageData = await fetch(`/api/image/${imageId}`);
                imageData = await imageData.json();
                setImage(`data:image/${imageData.type};base64,${imageData.decodedContent}`);
            }
            getImage();
        }
        else {
            setImage(thanksImg);
        }
    }, []);

    return (
    <div className="ThankYouCard col-12 col-sm-10 col-md-6 col-lg-4">
        <Link to={`/thanks/${id}`}>
            <img className="ThankYouCard-image" src={image} alt="Thank you!"></img>
            <div className="ThankYouCard-text">
                <h5 className="ThankYouCard-text-recipient">{recipient}</h5>
                <div className="ThankYouCard-text-message">{message}</div>
            </div>
        </Link>
    </div>);
}

export default ThankYouCard