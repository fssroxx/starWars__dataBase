import React, {Component} from 'react';

import Header from '../header';

import RandomPlanet from '../random-planet';

import SwapiService from '../../services';

import Row from '../row';

import { PeoplePage, PlanetPage, StarshipPage } from '../pages';


import { SwapiServiceProvider } from '../swapi-service-context';


export default class App extends Component {
    swapi = new SwapiService();

    state = {
        show: false,
        image: null
    }
    onShow() {
        this.setState({ show: !(this.state.show)})
    }
  
    
    render() {
        
        const { show } = this.state;
        const showNav = show ? <RandomPlanet /> : null;  
       
        return (
            <SwapiServiceProvider value={this.swapi}>
                <div className="app">
                    <Header/>
                    { showNav }
                    <button onClick={() => this.onShow()}>Show|Hide Random Planet</button>
                   
                    <PeoplePage/>

                    <PlanetPage/>

                    <StarshipPage/>  
                        
                </div>
            </SwapiServiceProvider>
        )
    }
    
}

