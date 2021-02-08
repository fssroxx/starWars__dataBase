import { Component } from "react";
import SwapiService from '../../services';
import Spinner from "../spinner";
import './person-details.css';
export default class PersonDetails extends Component{
    swapi = new SwapiService();

    state = {
        person: null
    };

    updatePerson() {
        const { personId } = this.props;
        if(!personId){
            return;
        }
        this.swapi.getPerson(personId).then((person) => {
            this.setState({
                person
            })
        })
    }

    componentDidMount(){
        this.updatePerson();
        console.log('visibledidm');
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
            console.log('visibleup');
           
        }

    }

    render() {
        console.log('visiblerender');
        if (!this.state.person) {
            return(
                <span>please, select a character from a list</span>
            )
        }

        if(this.state.loading) {
            return(
                <Spinner/>
            )
        }

      

        const { id, name, gender, birthYear, eyeColor } = this.state.person;
        return(
          
            <div className="person-details card">
                <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt='character'/>
                    <div className="card-body">
                        <h4>{ name }</h4>
                        <ul>
                            <li>
                                <span>
                                    Gender: 
                                </span>
                                <span>
                                    { gender }
                                </span>
                            </li>
                            <li>
                                <span>
                                    Birth Year: 
                                </span>
                                <span>
                                    { birthYear }
                                </span>
                            </li>
                            <li>
                                <span>
                                    Eye Color: 
                                </span>
                                <span>
                                    { eyeColor }
                                </span>
                            </li>
                        </ul>
                    </div>
            </div>
        )
    }



}