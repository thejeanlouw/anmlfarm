import React from 'react';
import GenericCardItem from '../generic-card-item/generic-card-item.component';
import './library-item.styles.scss'

const LibraryItem = ({...info}) => {
    console.log(info)
    return(
        <div className='library-item' key={info.id}>
            <GenericCardItem  {...info} />
        </div>
    )
}

export default LibraryItem;