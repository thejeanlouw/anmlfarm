import { Card } from '@material-ui/core';
import React from 'react';
import './event.styles.scss'

class Event extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const {title, description, imageUrl, date} = this.props.info;
        return(
            <div className='event'>
                <Card className='event-card'>
                    <img src={imageUrl} />
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='description'>{description}</span>
                    <span className='date'>{date}</span>
                </Card>
            </div>
        )
    }
}

export default Event;