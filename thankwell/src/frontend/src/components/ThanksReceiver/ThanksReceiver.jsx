import React, { useState, useEffect } from 'react';
import "./ThanksReceiver.scss";

var ThanksReceiver = ({ match }) =>  {

    const [thanks, setThanks] = useState({id: null, message: null, recipient: null, imageId: null});
    const [image, setImage] = useState(null);

    useEffect(() => {
        var getThanks = async () => {
            var response = await fetch(`/api/thanks/${match.params.id}`)
            response = await response.json();
            setThanks(response);

            if (response.imageId !== undefined) {
                var imageData = await fetch(`/api/image/${response.imageId}`);
                imageData = await imageData.json();
                setImage(`data:image/${imageData.type};base64,${imageData.decodedContent}`);
            }
        }

        getThanks();
    }, [match]);

    return (
        <div className="ThanksComposer">
            <h1 className="recipient-name pb-5">Dear {thanks.recipient}...</h1>
            <div className="message-content d-flex flex-column justify-content-between mr-2">
                <div className="d-flex justify-content-center align-items-center">
                    <span>{thanks.message}</span>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                {image && <img className="image" src={image} alt="Thank You!"/>}
                </div>
            </div>
            <h1 className="recipient-name pb-4 pt-2">Thank you.</h1>
        </div>
    );
};

export default ThanksReceiver;
