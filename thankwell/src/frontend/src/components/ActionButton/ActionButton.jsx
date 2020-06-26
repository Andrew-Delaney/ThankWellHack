import React from 'react';

import "./ActionButton.scss";

export const ActionButton = ({ buttonText, onClick, disabled }) => <button className="ActionButton" disabled={disabled} onClick={onClick}>{buttonText}</button>;

export default ActionButton;
