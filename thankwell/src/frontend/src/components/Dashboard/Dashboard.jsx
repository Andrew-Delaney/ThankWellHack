import React, {useEffect, useState} from 'react';
import ThankYouCard from '../ThankYouCard/ThankYouCard';
import thanksImg from "../../assets/thanks.jpg";

import "./Dashboard.scss";

const Dashboard = () => {
    const [allThanks, setAllThanks] = useState([]);

    useEffect( () => {
        fetch(`/api/all`)
            .then(response => response.json())
            .then(data => setAllThanks(data));
    }, []);

    return (
        <div className="Dashboard">
            <h2 className="mt-3 mb-3 pb-4 font-weight-bolder">Home</h2>
            <div className="Dashboard-cards row no-gutters">
                {
                    allThanks && allThanks.map((thanks, index) => {
                        console.log(thanks);
                        return <ThankYouCard key={index} recipient={thanks.recipient} message={thanks.message} image={thanks.image ? thanks.image : thanksImg} id={thanks.id}/>
                    })
                }
            </div>
        </div>
    );
};

export default Dashboard;
