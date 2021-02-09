import React, {Component} from 'react';

import Header from '../header';

import RandomPlanet from '../random-planet';

import PeoplePage from '../people-page';

import SwapiService from '../../services';

import ItemList from '../item-list';

import PersonDetails from '../person-details';

export default class App extends Component {
    swapi = new SwapiService();

    state = {
        show: false
    }
    onShow() {
        this.setState({ show: !(this.state.show)})
    }
  
    
    render() {
        const { show } = this.state;
        const showNav = show ? <RandomPlanet /> : null;

       
        return (
            <div className="app">
                <Header/>
                { showNav }
                <button onClick={() => this.onShow()}>Show|Hide Random Planet</button>
                  
                <PeoplePage/>
                <>
                    <ItemList onItemSelected={this.onPersonSelected}
                    getData={this.swapi.getAllPlanets}
                    renderItem={(item) => (
                        <span>ь {item.name}<button>!</button></span>
                    )}/>
                    <PersonDetails personId={this.state.selectedPerson}/>
                </> 
                <>
                    <ItemList onItemSelected={this.onPersonSelected}
                    getData={this.swapi.getAllStarships}
                    renderItem={(item) => `${item.name} ---- ${item.model}`}/>
                    <PersonDetails personId={this.state.selectedPerson}/>
                </>
        
            </div>
              
        )
    }
    
}

