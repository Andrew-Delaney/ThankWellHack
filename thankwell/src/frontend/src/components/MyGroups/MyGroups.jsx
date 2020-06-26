import React from 'react';
import GroupCard from '../GroupCard/GroupCard';
import Group from "../../assets/group.jpg";
import Birtellis from "../../assets/birtellis.jpg";
import Hospital from "../../assets/qe.jpg";
import BlackPepper from "../../assets/bp.jpg";

import "./MyGroups.scss";

var MyGroups = () => (
    <div className="MyGroups mt-4">
        <h2 className="MyGroups-heading m-3 pb-4 font-weight-bolder">My Groups</h2>
        <div className="MyGroups-row row no-gutters ml-4">
            <GroupCard image={BlackPepper} name="Black Pepper"/>
            <GroupCard image={Group} name="ThankWell"/>
            <GroupCard image={Birtellis} name="Birtellis"/>
            <GroupCard image={Hospital} name="Queen Elizabeth Hospital"/>
        </div>
    </div>
);

export default MyGroups;