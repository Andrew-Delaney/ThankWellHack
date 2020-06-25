import React, {useState} from 'react';
import "./ThanksComposer.scss";
import ActionButton from '../ActionButton/ActionButton';

const ThanksComposer = () => {
    const [textInput, setTextInput] = useState("");
    const [recipient, setRecipient] = useState("");

    function submit() {
        fetch(`/api/thanks?message=${textInput}&recipient=${recipient}`, {method: "POST"})
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        <div className="ThanksComposer">
            <h2 htmlFor="thanks-input" className="m-3 pb-4 font-weight-bolder">Give Thanks</h2>
            <div className="ThanksComposer-input">
                <label htmlFor="thanks-input">
                    <span className="recipient-input pr-2 font-weight-bold">To:</span>
                    <input type="text" className="recipient-input thanks-border"
                           onChange={input => setRecipient(input.target.value)}/>
                </label>
                <textarea
                    id="thanks-input"
                    className="ThanksComposer-input-text thanks-border"
                    value={textInput}
                    onChange={input => setTextInput(input.target.value)}
                    placeholder="Personalise your thank you message."
                >
                </textarea>
                <div className="ThanksComposer-input-submit">
                    <ActionButton
                        buttonText="Thank"
                        onClick={() => submit()}
                    />
                </div>
            </div>
        </div>
    );
};

export default ThanksComposer;
