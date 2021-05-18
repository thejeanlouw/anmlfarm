import { Card } from '@material-ui/core';
import React from 'react';
import './generic-card-item.styles.scss'

const GenericCardItem = ({id, title, subtitle, description, imageUrl, date, linkUrl, children})=>{
    const openExternal = () =>
    {
        if(linkUrl) {
            window.open(linkUrl);
        }
    }

    return(
        <div className='event' onClick={openExternal} key={id}>
            <Card className='generic-card-item' >
                {imageUrl? <img src={imageUrl} /> : null}
                {title ? <h1 className='title'>{title.toUpperCase()}</h1> :null}
                {subtitle ? <h2 className='subtitle'>{subtitle}</h2> :null}
                {description ? <span className='description'>{description}</span> : null}
                {date? <span className='date'>{date}</span> : null}
                {children}
            </Card>
        </div>
    )
}

export default GenericCardItem;