import React from 'react';
import './planning-list-item.css';

const PlanningListItem = ({label, important=false})=>{
    const style = {
        color: important ? 'orange' : 'black',
        fontWeight: important ? 'bold' : 'normal'

    };

    const Emoji = props => (
        <option
          role="img"
          aria-label={props.label ? props.label : ""}
          aria-hidden={props.label ? "false" : "true"}
          value={props.label}>
          {props.symbol}
        </option>
      );

    return (
        <span className="planning-list-item">
        <span className="planning-list-item-label" style ={style}>
            {label}
        </span>
            <button type="button" 
                    className="btn btn-outline-success btn-sm float-right">
                   <Emoji symbol="&#128276;" />
            </button>
            <button type="button" 
                    className="btn btn-outline-danger btn-sm float-right">
                    <Emoji symbol="&#128465;"/>
            </button>      
        </span>
    );
};

export default PlanningListItem;