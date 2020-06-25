import React from 'react';
import {AtSign, Bell, Facebook, Twitter} from 'react-feather';

import "./Footer.scss";
import {Link} from "react-router-dom";

const Footer = () => (
    <div className="Footer w-100">
        <div className="container-fluid container d-flex justify-content-around h-100">
            <div className="pl-5">
                <h4 className="mt-5">ThankWell</h4>
                <h6>Send a personal thank you in the moment.</h6>
                <div className="icons">
                    <Twitter/>
                    <Facebook/>
                    <AtSign/>
                    <Bell/>
                </div>
            </div>
            <div className="links d-flex flex-row justify-content-center pr-5 h-100 ">
                <Link className="Footer-link" to="/">Home</Link>
                <Link className="Footer-link" to="/give-thanks">Give Thanks</Link>
                <Link className="Footer-link" to="/groups">Groups</Link>
                <Link className="Footer-link" to="/messages">Messages</Link>
            </div>
        </div>
    </div>
);

export default Footer;
