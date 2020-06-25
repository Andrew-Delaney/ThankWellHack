import React from 'react';

import "./ActionButton.scss";

var ActionButton = ({ buttonText, onClick }) => <button className="ActionButton" onClick={onClick}>{buttonText}</button>;

export default ActionButton;