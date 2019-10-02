import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PlanningList from '../planing-list/planing-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import AddItem from '../add-item/add-item';
import './app.css';

export default class App extends Component{

    maxId = 10;

    state = { planningData: [
        this.createItem("Drink coffee"),
        this.createItem("Create react app"),
        this.createItem("Have good day")
    ],
    term: "",
    filter: "all"
  };

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

  createItem(label){
    return({
      label,
      important: false,
      done: false,
      id: this.maxId++
    });

  };

  addItem=(text)=>{
    const newItem = this.createItem(text);

    this.setState(({planningData})=>{
      const newArr =[
        ...planningData, newItem
      ];

      return(
        {planningData: newArr}
      );
    });
  };

  onToggleImportant =(id)=>{
    this.setState(({planningData})=>{
      const idx = planningData.findIndex((el)=>el.id===id);
      const oldItem=planningData[idx];
      const newItem={...oldItem, important: !oldItem.important};
      const newArr = [
        ...planningData.slice(0, idx),
        newItem,
        ...planningData.slice(idx+1)
      ];
    return(
      {planningData : newArr}
    )
  });
  };

  onToggleDone= (id)=>{
    this.setState(({planningData})=>{
        const idx = planningData.findIndex((el)=>el.id===id);
        const oldItem=planningData[idx];
        const newItem={...oldItem, done: !oldItem.done};
        const newArr = [
          ...planningData.slice(0, idx),
          newItem,
          ...planningData.slice(idx+1)
        ];
      return(
        {planningData : newArr}
      )
    });
  };

  onSearchChange = (term) =>{
    this.setState({term});
  };

  onFilterChange = (filter) =>{
    this.setState({filter});
  };

  search( items, term){
    if(term.length === 0){
      return items;
    }
    return items.filter((item)=>{
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  filter(items, filter){
    switch (filter){
      case "all": return items;
      case "active": return items.filter((item) => !item.done); 
      case  "done" : return items.filter((item) => item.done);
      default: return items;
    };
  };

    render(){
      const {planningData, term, filter} = this.state;
      const visibleData = this.filter(this.search(planningData, term), filter);
      const doneCount = this.state
                        .planningData.filter((el)=>el.done).length;
      const planCount = this.state.planningData.length - doneCount;

    return (
        <div className="planning-app">
          <AppHeader willDo={planCount} done={doneCount} />
          <div className="top-panel d-flex">
            <SearchPanel onSearchChange = {this.onSearchChange}/>
            <ItemStatusFilter filter ={filter} 
            onFilterChange={this.onFilterChange} />
          </div>
    
          <PlanningList plan={visibleData} 
          onDeleted={ this.onDeleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          />
          <AddItem onItemAdded = {this.addItem} />
        </div>
      );
        }
};