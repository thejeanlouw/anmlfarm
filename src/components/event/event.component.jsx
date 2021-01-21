import { Card } from '@material-ui/core';
import React from 'react';
import GenericCardItem from '../generic-card-item/generic-card-item.component';
import './event.styles.scss'

class Event extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='event'>
                <GenericCardItem
                    {...this.props.info}
                />
            </div>
        )
    }
}

export default Event;