import React from 'react';
import { withRouter } from 'react-router-dom';
import fingerImage from './fingerprint.svg'
import './fingerbutton.styles.css'

const FingerButton = ({callback, history}) => (
    <div className='fingerbutton'>
        <img 
        alt="next"
        src={fingerImage} 
        onClick={() => {
            if(callback==null){
                history.push('/');
            } else callback();}}></img>
    </div>
)

export default withRouter(FingerButton);