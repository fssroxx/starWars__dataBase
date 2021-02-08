import { Component } from 'react';
import './item-list.css';
import SwapiService from '../../services'
import Spinner from '../spinner';

export default class ItemList extends Component{
    swapi = new SwapiService();
    
    state = {
        itemList: null
    }

    componentDidMount() {
        const { getData } = this.props;
        getData()
        .then((itemList) => {
            this.setState ({itemList})
        })
    }

    renderItems(array) {
            return array.map((item) => {
                const {id} = item;
                const label = this.props.renderItem(item)
                return(
                    <li key={id} onClick={() => this.props.onItemSelected(id)}>{label}
                    </li>
                )
            
            }
        )
    }

    render() {
        const { itemList } = this.state;

        if(!itemList) {
            return <Spinner/>
        }
        const elements = this.renderItems(itemList);
        return(
            <ul>
                { elements }
            </ul>
        )
    }
}