import React, {useEffect, useState} from 'react';
import ThankYouCard from '../ThankYouCard/ThankYouCard';
import thanksImg from "../../assets/thanks.jpg";

import "./Dashboard.scss";

const Dashboard = () => {
    const [allThanks, setAllThanks] = useState([]);
    const [imagesMap, setImagesMap] = useState(new Map());

    useEffect( () => {
        fetch(`/api/all`)
            .then(response => response.json())
            .then(data => {setAllThanks(data); return data})
            .then(data => data.map(datum =>
                fetch(`/api/image/${datum.imageId}`)
                    .then(response => response.json())
                    .then(data => {
                        var newMap = new Map(imagesMap);
                        newMap[datum.id] = `data:image/${data.type};base64,${data.decodedContent}`;
                        setImagesMap(newMap);
                     })
                ))
    }, []);

    return (
        <div className="Dashboard">
            <h2 className="mt-3 mb-3 pb-4 font-weight-bolder">Home</h2>
            <div className="Dashboard-cards row no-gutters">
                {
                    allThanks && allThanks.map((thanks, index) => {
                        return <ThankYouCard key={index} recipient={thanks.recipient} message={thanks.message} image={imagesMap[thanks.id] ? imagesMap[thanks.id] : thanksImg} id={thanks.id}/>
                    })
                }
            </div>
        </div>
    );
};

export default Dashboard;
