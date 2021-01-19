import React from 'react';
import './swipe-up-button.styles.scss'

import {Link} from 'react-router-dom'


import buttonGraphic from './images/SwipeUp.png';

const SwipeUpButton = ({callback}) =>{

    return(
        <div className='swipe-up-button'>
          <img src={buttonGraphic} onClick={callback} />
        </div>
    )

}

export default SwipeUpButton;