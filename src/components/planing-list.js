import React from 'react';
import PlanningListItem from './planning-list-item';

const PlanningList = ()=>{
    return(
        <ul>
            <li><PlanningListItem label="Drink coffee"/></li>
            <li><PlanningListItem label="Create react app" important/></li>
        </ul>
    );
};

export default PlanningList;