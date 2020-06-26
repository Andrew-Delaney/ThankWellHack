import React, { useState, useEffect } from 'react';
import "./ThanksReceiver.scss";

var ThanksReceiver = ({ match }) =>  {

    const [thanks, setThanks] = useState({id: null, message: null, recipient: null, imageId: null});
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch(`/api/thanks/${match.params.id}`)
            .then(response => response.json())
            .then(data => {
                setThanks(data);
                return data;
            })
            .then(data => {
                if (data.imageId !== undefined) {
                    fetch(`/api/image/${data.imageId}`)
                        .then(response => response.json())
                        .then(data => setImage(data))
                }
            });
    }, [match]);

    return (
        <div className="ThanksComposer">
            <h1 className="recipient-name pb-5">Dear {thanks.recipient}...</h1>
            <div className="message-content d-flex flex-column justify-content-between mr-2">
                <div className="d-flex justify-content-center align-items-center">
                    <span>{thanks.message}</span>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                {image && image.decodedContent && <img className="image"src={`data:image/${image.type};base64,${image.decodedContent}`}alt="Thank You!"/>}
                </div>
            </div>
            <h1 className="recipient-name pb-4 pt-2">Thank you.</h1>
        </div>
    );
};

export default ThanksReceiver;
