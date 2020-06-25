import React, {useEffect, useState} from 'react';

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
            {allThanks && allThanks.map(thanks => <div><a href={`thanks/${thanks.id}`}>{JSON.stringify(thanks)}</a><br/></div>)}
        </div>
    );
};

export default Dashboard;
