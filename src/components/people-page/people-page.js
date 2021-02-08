import { Component } from "react";
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

export default class PeoplePage extends Component{

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

        return (
            <>
                <ItemList onItemSelected={this.onPersonSelected}/>
                <PersonDetails personId={this.state.selectedPerson}/>
            </>
        )
    }
}