import React, { useState } from 'react';
import Card  from './Card';
import './App.css';
function App() {
    const [cnt, setCnt] = useState(0);

    return (
        <div className='card-grid'>
        
        <Card className="card"/>
        <Card className="card"/>
        <Card className="card"/>
        <Card className="card"/>
        </div>
    );
}

export default App;
