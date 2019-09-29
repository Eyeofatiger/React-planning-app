import React, {Component} from 'react';
import './planning-list-item.css';

export default class PlanningListItem extends Component{

    render(){
        const {label, onDeleted,
               onToggleImportant, onToggleDone,
               done, important} = this.props;
   
        let className = "planning-list-item";
        if(done){
            className += " done";
        }

        if(important){
            className += " important";
        }
    
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
            <span className={className}>
            <span className="planning-list-item-label" 
            onClick={onToggleDone}>
                {label}
            </span>
                <button type="button" 
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={onToggleImportant}>
                       <Emoji symbol="&#128276;" />
                </button>
                <button type="button" 
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={onDeleted}>
                        <Emoji symbol="&#128465;"/>
                </button>      
            </span>
        );
    }
}