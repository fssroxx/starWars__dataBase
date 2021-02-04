import React from 'react';

import Header from '../header';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';

const App = () => {
    return (
        <div className="app">
            <Header/>
            <RandomPlanet />  
            <ItemList/>
            <PersonDetails/>
            
    
        </div>
          
    )
}

export default App;