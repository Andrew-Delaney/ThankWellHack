import React, {useEffect, useState} from 'react';
import ThankYouCard from '../ThankYouCard/ThankYouCard';

const Dashboard = () => {
    const [allThanks, setAllThanks] = useState([]);

    useEffect( () => {
        fetch(`/api/all`)
            .then(response => response.json())
            .then(data => setAllThanks(data))
            .then(data => console.log(data));
    }, []);

    return (
        <div>
            <h2 className="m-3 pb-4 font-weight-bolder">Home</h2>
            {allThanks && allThanks.map((thanks, index) =>
             <div key={index}>
                <a href={`thanks/${thanks.id}`}>
                    <ThankYouCard recipient={thanks.recipient} message={thanks.message} image="../assets/thanks.jpg"/>
                </a>
                <br/>
            </div>)}
        </div>
    );
};

export default Dashboard;
