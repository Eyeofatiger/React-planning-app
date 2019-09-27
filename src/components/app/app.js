import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PlanningList from '../planing-list/planing-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import './app.css';

const App = ()=>{

    const planningData=[
        {label: "Drink tea!", important: false, id:1},
        {label: "Create react app", important: true, id:2},
        {label: "Have good day", important: false, id:3}
    ];

    return (
        <div className="planning-app">
          <AppHeader willDo={1} done={3} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
    
          <PlanningList plan={planningData} />
        </div>
      );
};

export default App;