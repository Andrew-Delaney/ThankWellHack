import React, {useEffect, useState} from 'react';
import ThankYouCard from '../ThankYouCard/ThankYouCard';

import "./ActivityFeed.scss";

const ActivityFeed = () => {
    const [allThanks, setAllThanks] = useState(null);

    useEffect( () => {
        if (allThanks === null) {
            var getAll = async () => {
                var response = await fetch(`/api/all`);
                response = await response.json();
                setAllThanks(response);
        }
        getAll();
        }
    });

    return (
        <div className="ActivityFeed">
            <h2 className="mt-3 mb-3 pb-4 font-weight-bolder">Activity Feed</h2>
            <div className="ActivityFeed-cards row no-gutters mr-4">
                {
                    allThanks && allThanks.map((thanks, index) => {
                        return <ThankYouCard key={index} recipient={thanks.recipient} message={thanks.message} imageId={thanks.imageId} id={thanks.id}/>
                    })
                }
            </div>
        </div>
    );
};

export default ActivityFeed;
