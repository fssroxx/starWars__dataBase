import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = ({ itemId, swapi }) => {
    const { getPerson, getPersonImage} = swapi;

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

export default withSwapiService(PersonDetails);