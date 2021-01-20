import React from 'react';
import './library-item.styles.scss'

const LibraryItem = ({id, title, linkUrl, imageUrl}) => {
    return(
        <div className='library-item' key={id}>
            <img src={imageUrl} />
            <h2>{title}</h2>
            <button>Read Article</button>
        </div>
    )
}

export default LibraryItem;