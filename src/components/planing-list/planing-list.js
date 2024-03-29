import React from 'react';
import PlanningListItem from '../planning-list-item/planning-list-item';
import './planning-list.css';

const PlanningList = ({plan, onDeleted, onToggleImportant, onToggleDone})=>{

    const elements = plan.map((items)=>{
        const {id, ...itemsProps} = items;
        return(
            <li key = {id} className="list-group-item">
                <PlanningListItem {...itemsProps} 
                onDeleted = {()=>onDeleted(id)}
                onToggleImportant = {()=>onToggleImportant(id)}
                onToggleDone={()=>onToggleDone(id)}
                
            /></li>
        );
    });

    return(
        <ul className="list-group planning-list">
            {elements}
        </ul>
    );
};

export default PlanningList;