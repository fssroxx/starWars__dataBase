import { Component } from 'react';
import './item-list.css';
import SwapiService from '../../services'
import Spinner from '../spinner';

export default class ItemList extends Component{
    swapi = new SwapiService();
    
    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapi.getAllPeople()
        .then((body) => {
            this.setState ({peopleList: body})
        })
    }

    renderItems(array) {
            return array.map(({id, name}) => {
                return(
                    <li key={id} onClick={() => this.props.onItemSelected(id)}>{name}
                    </li>
                )
            
            }
        )
    }

    render() {
        const { peopleList } = this.state;

        if(!peopleList) {
            return <Spinner/>
        }
        const elements = this.renderItems(peopleList);
        return(
            <ul>
                { elements }
            </ul>
        )
    }
}