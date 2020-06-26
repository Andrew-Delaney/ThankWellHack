import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ActionButton from '../ActionButton/ActionButton';
import { User } from 'react-feather';

import "./UserProfile.scss";

var UserProfile = () => {
    const [profilePicture] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [location, setLocation] = useState("");
    const [company, setCompany] = useState("");
    const history = useHistory();

    const [setFileSelectorValue] = useState(null);
    const [fileSelector] = useState(() => {
        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.setAttribute('id', 'testFileSelector');
        fileSelector.onchange = (e) => setFileSelectorValue(e.target.files[0]);
        return fileSelector;
    });

    var validPasswords = () => {
        if (password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/) && password === confirmPassword ) {
            return true;
        }
        return false;
    };

    const handleFileSelect = (e) => {
        e.preventDefault();
        fileSelector.click();
    };

    return (
        <div className="UserProfile">
            <div className="UserProfile-image">
            {profilePicture === "" && <label for="pictureChooser" className="UserProfile-image-label">Choose your profile picture:</label>}
            {profilePicture !== "" ? <img className="UserProfile-image-picture" alt="profile"></img> : <User id="pictureChooser" className="UserProfile-image-picture-selector" onClick={handleFileSelect}/>}
            </div>
            <div className="UserProfile-form">
                <label for="name">Name: </label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label for="email">Email: </label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label for="password">Password: </label>
                <input
                 id="password"
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                 title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                 />
                <label for="confirmPassword">Please reenter your password: </label>
                <input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <label for="location">Location: </label>
                <input id="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)}/>
                <label for="company">Company: </label>
                <input id="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)}/>
                <ActionButton
                 buttonText="Save"
                 disabled={!(name !== "" && email !== "" && validPasswords() && location !== "" && company !== "")}
                 onClick={() => history.push("/")}
                />
            </div>
        </div>);
};

export default UserProfile