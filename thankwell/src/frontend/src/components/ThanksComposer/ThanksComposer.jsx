import React, { useState } from 'react';
import ActionButton from '../ActionButton/ActionButton';
import { Image, Film } from 'react-feather';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Link} from 'react-router-dom';

import "./ThanksComposer.scss";

const ThanksComposer = () => {
    const [textInput, setTextInput] = useState("");
    const [recipient, setRecipient] = useState("");
    const [fileSelectorValue, setFileSelectorValue] = useState(null);
    const [fileSelector] = useState(() => {
        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.setAttribute('id', 'testFileSelector');
        fileSelector.onchange = (e) => setFileSelectorValue(e.target.files[0]);
        return fileSelector;
    });
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const reset = () => {
        handleClose();
        setTextInput("");
        setRecipient("");
        setFileSelectorValue(null);
    };

    const submit = () => {
        if (textInput !== "" && recipient !== "") {
            if (fileSelectorValue !== null) {
                const data = new FormData();
                data.append('image', fileSelectorValue);

                fetch(`/api/thanks?message=${textInput}&recipient=${recipient}`, {method: "POST", body: data})
                    .then(response => response.json())
                    .then(data => console.log(data));
            } else {
                fetch(`/api/thanks?message=${textInput}&recipient=${recipient}`, {method: "POST"})
                    .then(response => response.json())
                    .then(data => console.log(data));
            }

            handleOpen();
        }
    };

    const handleFileSelect = (e) => {
        e.preventDefault();
        fileSelector.click();
    };

    return (
        <div className="ThanksComposer">
            <h2 htmlFor="thanks-input" className="m-3 pb-4 font-weight-bolder">Give Thanks</h2>
            <div className="ThanksComposer-input">
                <label htmlFor="thanks-input">
                    <span className="recipient-input pr-2 font-weight-bold">To:</span>
                    <input type="text" className="recipient-input thanks-border"
                           value={recipient}
                           onChange={input => setRecipient(input.target.value)}
                           placeholder="Recipient"
                    />
                </label>
                <textarea
                    id="thanks-input"
                    className="ThanksComposer-input-text thanks-border"
                    value={textInput}
                    onChange={input => setTextInput(input.target.value)}
                    placeholder="Personalise your thank you message."
                >
                </textarea>
                <div className="ThanksComposer-input-lower">
                    <Image className="ThanksComposer-input-lower-icon" onClick={handleFileSelect}/>
                    <Film className="ThanksComposer-input-lower-icon" onClick={handleFileSelect}/>
                    <div className="ThanksComposer-input-lower-submit">
                        <ActionButton
                            buttonText="Thank"
                            onClick={() => submit()}
                        />
                    </div>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}>
                <Fade in={open}>
                    <div className="thanks-modal">
                        <h2 className="font-weight-bold">Thank you for thanking.</h2>
                        <span className="mb-2">Your personal thank you has been saved.</span>
                        <div className="mt-4">
                            <Link to="/"><button className="home-button">Home</button></Link>
                            <ActionButton
                                buttonText="Thank again"
                                onClick={() => reset()}
                            />
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default ThanksComposer;
