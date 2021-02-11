import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (Wrapped) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapi) => {
                        return (
                            <Wrapped {...props} swapi={swapi}/>
                        )
                    }
                }
            </SwapiServiceConsumer>
        )
        
    }
}

export default withSwapiService;