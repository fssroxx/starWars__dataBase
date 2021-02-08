import React, {Component} from 'react';

import Header from '../header';

import RandomPlanet from '../random-planet';

import PeoplePage from '../people-page'

export default class App extends Component {
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
                <PeoplePage/>
                <PeoplePage/>
                
        
            </div>
              
        )
    }
    
}

