import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services';
import { SwapiServiceConsumer } from '../swapi-service-context';

const swapi = new SwapiService();

const {
    getStarship,
    getPlanet,
    getStarshipImage,
    getPlanetImage
} = swapi;

const PersonDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPerson, getPersonImage }) => {
                    return(
                        <ItemDetails 
                            itemId={ itemId } 
                            getData={getPerson}
                            getImageUrl={getPersonImage}>
                            <Record field="gender" label="Gender" />
                            <Record field="eyeColor" label="Eye Color" />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
}

const StarshipDetails = () => {
    return(
    <ItemDetails 
        itemId={12}
        getData={getStarship}
        getImageUrl={getStarshipImage} >

        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />

    </ItemDetails>
    )
}

const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails 
        itemId={ itemId } 
        getData={getPlanet}
        getImageUrl={getPlanetImage}>
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="Rotation Period" />
        <Record field="diameter" label="Diameter" />
    </ItemDetails>
    )
}

export{
    PersonDetails,
    StarshipDetails,
    PlanetDetails
}