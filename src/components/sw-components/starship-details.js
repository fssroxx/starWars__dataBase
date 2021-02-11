import ItemDetails, { Record } from '../item-details';
import { withSwapiService} from '../hoc-helpers';

const StarshipDetails = (props) => {
    
    return(
        <ItemDetails {...props}>
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapi) => {
    return{
        getData: swapi.getStarship,
        getImageUrl: swapi.getStarshipImage
    }
   
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);