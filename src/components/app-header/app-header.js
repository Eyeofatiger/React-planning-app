import React from 'react';
import './app-header.css';

const AppHeader = ({willDo, done})=>{
    return( 
        <div className="app-header d-flex">
            <h1>Planning list</h1>
            <h2>{willDo} more to do, {done} done</h2>
        </div>
    );
};

export default AppHeader;