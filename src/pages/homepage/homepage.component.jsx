import React from 'react';
import './homepage.styles.css'

import Avatar from '@material-ui/core/Avatar';
import SwipeUpButton from '../../components/swipe-up-button/swipe-up-button.component';

class Homepage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className='home-page'>
            <div className='border'>
                <div className='main-area'>
                    <Avatar>H</Avatar>
                </div>
                <div className='menubar-button'>
                    <SwipeUpButton />
                </div>
            </div>
        </div>
        )
    }

}

export default Homepage;