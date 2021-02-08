import React, {Component} from 'react';
import Spinner from '../spinner';
import './random-planet.css';
import SwapiService from '../../services/swapi-service.js';
import './random-planet.css';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {

    swapi = new SwapiService();

    constructor() {
        super();
        
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000)
    }

    state = {
        planet: {},
        loading: true,
        error: false
    };

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    }

    onError = () => {
        this.setState({error: true, loading: false})
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25 + 2);
        this.swapi.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
    }
    render() {

        
        const {planet, loading, error} = this.state;
        const spinner = loading ? <Spinner/> : null;
        const content = ! (loading || error) ? <PlanetView planet={planet}/> : null;
        const errorBlock = error ? <ErrorIndicator/> : null;

        return(
            <div className="block-center">
                { spinner }
                { errorBlock }
                { content }
            </div>
        )
    }
};

const PlanetView = ({planet}) => { 
    const { id , name, population, rotationPeriod, diameter } = planet;
    return (
        <>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='planet_img'/>
            <div className="random-planet__name">
                    <h4><span>{name}</span></h4>
                <ul>
                    <li><span>Population </span><span>{population}</span></li>
                    <li><span>Rotation Period </span><span>{rotationPeriod}</span></li>
                    <li><span>Diameter </span><span>{diameter}</span></li>
                </ul>
            </div>     
        </>
    )
}


    
        
    

