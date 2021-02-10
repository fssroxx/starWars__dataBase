import React, {Component} from 'react';

import Header from '../header';

import RandomPlanet from '../random-planet';

import PeoplePage from '../people-page';

import SwapiService from '../../services';

import ItemList from '../item-list';

import Row from '../row';


import{
    PersonDetails,
    StarshipDetails,
    PlanetDetails,
    PersonList,
    StarshipList,
    PlanetList
} from '../sw-components/'

import ItemDetails, { Record } from '../item-details';

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
        const { getPerson, getStarship, getPersonImage, getStarshipImage, getAllPeople, getAllPlanets, getAllStarships } = this.swapi;
        const { show } = this.state;
        const showNav = show ? <RandomPlanet /> : null;
        const personDetails = (
            <ItemDetails 
                itemId={1} 
                getData={getPerson}
                getImageUrl={getPersonImage}>
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>

        );
        const starshipDetails = (
            <ItemDetails 
                itemId={12}
                getData={getStarship}
                getImageUrl={getStarshipImage} >

                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />

            </ItemDetails>
        );   
       
        return (
            <div className="app">
                <Header/>
                { showNav }
                <button onClick={() => this.onShow()}>Show|Hide Random Planet</button>
                <Row 
                    left={personDetails} 
                    right={starshipDetails} />
                    
                    <PersonDetails itemId={11} />
                    <PlanetDetails itemId={5} />
                    <StarshipDetails itemId={9} />

                    <PersonList
                        
                        onItemSelected={() => {}}>

                        { ({name}) => <span>{name}</span> }
                    </PersonList>

                    <StarshipList
                        
                        onItemSelected={() => {}}>

                        { ({name}) => <span>{name}</span> }
                    </StarshipList>

                    <PlanetList
                        
                        onItemSelected={() => {}}>

                        { ({name}) => <span>{name}</span> }
                    </PlanetList>
            </div>
              
        )
    }
    
}

