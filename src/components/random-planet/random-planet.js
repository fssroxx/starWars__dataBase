import React, {Component} from 'react';

import './random-planet.css';
import SwapiService from '../../services/swapi-service.js';


export default class RandomPlanet extends Component {

    swapi = new SwapiService();

    constructor() {
        super();
        this.updatePlanet();
    }

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null

    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 25 + 2);
        this.swapi.getPlanet(id).then((planet) => {
            this.setState({
                id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            })
        })
    }
    render() {

        const {id, name, population, rotationPeriod, diameter} = this.state;

        return(
            <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='planet_img'/>
            <div className="random-planet__name">
                    <h4><span>{name}</span></h4>
                <ul>
                    <li><span>Population </span><span>{population}</span></li>
                    <li><span>Rotation Period </span><span>{rotationPeriod}</span></li>
                    <li><span>Diameter </span><span>{diameter}</span></li>
                </ul>
            </div>      
        </React.Fragment>
        )
    }
};
//     return (

//         <React.Fragment>
//             <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg` } alt='planet_img'/>
//             <div className="random-planet__name">
//                     <h4><span>{name}</span></h4>
//                 <ul>
//                     <li><span>Population </span><span>{population}</span></li>
//                     <li><span>Rotation Period </span><span>{rotationPeriod}</span></li>
//                     <li><span>Diameter </span><span>{diameter}</span></li>
//                 </ul>
//             </div>      
//         </React.Fragment>
//     )
// }
// ;
   


    
        
    

