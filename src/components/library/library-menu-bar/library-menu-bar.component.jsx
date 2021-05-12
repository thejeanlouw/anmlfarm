import React from 'react';
import './library-menu-bar.styles.scss'

const LibraryMenuBar = ({callback, collection}) =>
{ 
    const innerCallback = (topic) =>{
        console.log(topic);
        if(topic){
            callback(topic);
        }
    }
    
    return (
    <div className='library-menu-bar'>
        {collection ? collection.map(({id, topic, menuImageUrl})=>(
            <div className='topic-item' key={id} onClick={() => innerCallback(topic)}>
                <img src={menuImageUrl}/>
                <span>{topic}</span>
            </div>
        )):null}
    </div>
)}

export default LibraryMenuBar;