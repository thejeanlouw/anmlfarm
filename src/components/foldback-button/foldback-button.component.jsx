import React from 'react';
import { withRouter } from 'react-router-dom';
import foldbackImage from './left-arrow.svg'
import './foldback-button.styles.css'

const FoldbackButton = ({callback, history}) => (
    <div className='foldback-button'>
        <img
        alt="back" 
        src={foldbackImage} 
        onClick={() => {
            if(callback==null){
                history.goBack();
            } else callback();}}></img>
    </div>
)

export default withRouter(FoldbackButton);