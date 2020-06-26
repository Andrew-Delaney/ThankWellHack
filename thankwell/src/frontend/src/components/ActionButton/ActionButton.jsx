import React from 'react';

import "./ActionButton.scss";

export const ActionButton = ({ buttonText, onClick }) => <button className="ActionButton" onClick={onClick}>{buttonText}</button>;

export default ActionButton;
