import React from 'react';
import GenericCardItem from '../../shared/generic-card-item/generic-card-item.component';
import './library-item.styles.scss'

const LibraryItem = ({...info}) => {
    return(
        <div className='library-item' key={info.id}>
            <GenericCardItem  {...info} />
        </div>
    )
}

export default LibraryItem;