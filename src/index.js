import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import PlanningList from './components/planing-list';

const App = ()=>{
    return(
        <div>
            <AppHeader />
            <SearchPanel />
            <PlanningList />
        </div>
    );
};


ReactDom.render(<App />, document.getElementById("root"));