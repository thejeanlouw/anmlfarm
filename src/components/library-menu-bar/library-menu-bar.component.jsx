import React from 'react';
import './library-menu-bar.styles.scss'

const LibraryMenuBar = ({callback, collection}) => (
    <div className='library-menu-bar'>
        {collection ? collection.map(({id, topic, menuImageUrl}))=>(
            <div className='topic-item' key={id}>
                <img src={menuImageUrl}/>
                <span>{topic}</span>
            </div>
        )};
    </div>
)

export default LibraryMenuBar;