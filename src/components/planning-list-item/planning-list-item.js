import React, {Component} from 'react';
import './planning-list-item.css';

export default class PlanningListItem extends Component{
    constructor(){
        super();
        this.state={
            done: false,
            important: false
        }
    }

    onLabelClick = ()=>{
        this.setState(({done})=>{
            return{
                done: !done
            }
        });
    }

    onMarkImportant = ()=>{
        this.setState(({important})=>{
            return{
            important: !important
            }
        });
    }

    render(){
        const {label, onDeleted} = this.props;
        const {done, important} = this.state;
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
            onClick={this.onLabelClick}>
                {label}
            </span>
                <button type="button" 
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={this.onMarkImportant}>
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