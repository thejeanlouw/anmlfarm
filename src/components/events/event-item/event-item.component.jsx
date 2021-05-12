import { Card } from '@material-ui/core';
import React from 'react';
import GenericCardItem from '../../shared/generic-card-item/generic-card-item.component';
import './event-item.styles.scss'

class EventItem extends React.Component {

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

export default EventItem;