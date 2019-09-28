import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PlanningList from '../planing-list/planing-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import './app.css';

export default class App extends Component{

    state = { planningData: [
        {label: "Drink tea!", important: false, id:1},
        {label: "Create react app", important: true, id:2},
        {label: "Have good day", important: false, id:3}
    ]};

    onDeleteItem = (id)=>{
      this.setState(({planningData})=>{
        const idx = planningData.findIndex((el)=> el.id === id);

        const newArr = [
          ...planningData.slice(0, idx),
          ...planningData.slice(idx+1)
        ];

        return{
          planningData : newArr
        };
      });

    };

    render(){
    return (
        <div className="planning-app">
          <AppHeader willDo={1} done={3} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
    
          <PlanningList plan={this.state.planningData} 
          onDeleted={ this.onDeleteItem}/>
        </div>
      );
        }
};