import ItemDetails, { Record } from '../item-details';
import { withSwapiService} from '../hoc-helpers';

const PlanetDetails = (props) => {
    return(
        <ItemDetails {...props}>
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>      
    )
}
const mapMethodsToProps = (swapi) => {
    return{
        getData: swapi.getPlanet,
        getImageUrl: swapi.getPlanetImage
    }
}
export default withSwapiService(PlanetDetails, mapMethodsToProps);