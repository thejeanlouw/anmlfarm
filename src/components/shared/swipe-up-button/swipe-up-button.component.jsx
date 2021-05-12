import React from 'react';
import './swipe-up-button.styles.scss'

import {Link} from 'react-router-dom'


import buttonGraphic from './images/bullseye.png';

const SwipeUpButton = ({callback}) =>{

    return(
        <div className='swipe-up-button' onClick={callback} >
          <img src={buttonGraphic} />
        </div>
    )

}

export default SwipeUpButton;