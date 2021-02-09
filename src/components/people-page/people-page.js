import { Component } from "react";
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services';
import Row from '../row';


export default class PeoplePage extends Component{
    swapi = new SwapiService();
    state={
        selectedPerson: null,
        error: false
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
        console.log(id)
    }

    componentDidCatch(error) {
        this.setState({
            error: true
        })
    }

    render(){
        const { error } = this.state;
        if (error) {
            return (
                <ErrorIndicator/>
            )
        }

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                          getData={this.swapi.getAllPeople}
                          renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}/>
        )

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        )

        return (
          <Row left={ itemList } right={ personDetails } />
        )
    }
}