import React, { Component } from "react";
import SwapiService from '../../services';
import Spinner from "../spinner";
import './item-details.css';


const Record = ({ item, field, label}) => {
    return(
        <li>
            <span>{ label }</span>
            <span>{ item[field] }</span>
        </li>
    )
}

export {
    Record
};

export default class itemDetails extends Component{
    swapi = new SwapiService();

    state = {
        item: null,
        image: null
    };

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if(!itemId){
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item, 
                    image: getImageUrl(item)
            })
        })
    }

    componentDidMount(){
        this.updateItem();
        console.log('visibledidm');
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
            console.log('visibleup');
           
        }

    }

    render() {
        console.log('visiblerender');
        if (!this.state.item) {
            return(
                <span>please, select a character from a list</span>
            )
        }

        if(this.state.loading) {
            return(
                <Spinner/>
            )
        }

      

        const { item, image } = this.state;
        const { id, name, gender, birthYear, eyeColor } = item;
        return(
          
            <div className="item-details card">
                <img className="item-image" src={ image } alt='character'/>
                    <div className="card-body">
                        <h4>{ name }</h4>
                        <ul>
                            { 
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item })
                            }) 
                            }
                        </ul>
                    </div>
            </div>
        )
    }



}