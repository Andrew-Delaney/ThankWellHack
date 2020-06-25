import React, { useState } from 'react';
import "./ThanksComposer.scss";
import ActionButton from '../ActionButton/ActionButton';

var ThanksComposer = () => {
    const [textInput, setTextInput] = useState("");

    return (
        <div className="ThanksComposer">
            <div className="ThanksComposer-input">
                <label htmlFor="thanks-input">Create your thank you: </label>
                <textarea
                id="thanks-input"
                className="ThanksComposer-input-text"
                value={textInput}
                onChange={input => setTextInput(input.target.value)}
                placeholder="Personalise your thank you message."
                >
                </textarea>
                <div className="ThanksComposer-input-submit">
                    <ActionButton
                     buttonText="Thank"
                     onClick={() => console.log("Button Clicked!!!!!")}
                    />
                </div>
            </div>
        </div>
    );
}

export default ThanksComposer;