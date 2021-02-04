import { Component } from "react";

export default class PersonDetails extends Component{

    render() {
        return(
            <div className="person-details card">
                <img className="person-image" src="" alt='pi'/>
                    <div className="card-body">
                        <h4>R2-D2</h4>
                        <ul>
                            <li>
                                <span>
                                    Gender
                                </span>
                            </li>
                            <li>
                                <span>
                                    Birth Year
                                </span>
                                <span>
                                    43
                                </span>
                            </li>
                            <li>
                                <span>
                                    Eye Color
                                </span>
                                <span>
                                    brown
                                </span>
                            </li>
                            <li>
                                <span>
                                    Gender
                                </span>
                                <span>
                                    male
                                </span>
                            </li>
                        </ul>
                    </div>
            </div>
        )
    }



}