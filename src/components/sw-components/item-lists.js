import ItemList from '../item-list'
import {withData , withSwapiService} from '../hoc-helpers';


const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return(
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}
const renderName = ({ name }) => <span> { name } </span>
const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>

const mapPersonMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPeople
  }
}
const mapPlanetMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPlanets
  }
}
const mapStarshipMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllStarships
  }
}

const PersonList = withSwapiService(
                      withData(
                      withChildFunction(ItemList, renderName)),mapPersonMethodsToProps);

const PlanetList = withSwapiService(
                      withData(
                      withChildFunction(ItemList, renderName)),mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
                      withData(
                      withChildFunction(ItemList, renderModelAndName)),mapStarshipMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
};