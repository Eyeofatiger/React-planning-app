import React, {Component} from 'react';
import './add-item.css';

export default class AddItem extends Component{

    state = {
        label: ""
    };

    onLabelChange = (eventObject)=>{
        this.setState({label: eventObject.target.value});
    };

    onSubmit=(eventObject)=>{
        eventObject.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ""
        });
    };

    render(){
        return(
        <form className="add-item d-flex" onSubmit={this.onSubmit}>
            <input type="text" 
                   placeholder="Add new position"
                   className="search-input form-control"
                   onChange={this.onLabelChange}
                   value={this.state.label} />
            <button type="button" 
                    onClick={this.onSubmit}
                    className="btn btn-outline-primary btn-add-item"
                    >
                        Add Item
            </button>
        </form>
        )};

}