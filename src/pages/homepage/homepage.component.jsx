import React from 'react';
import './homepage.styles.css'

import Avatar from '@material-ui/core/Avatar';
import MenuDrawer from '../../components/menu-drawer/menu-drawer.component';

class Homepage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
        <div className='home-page'>
            <div className='border'>
                <div className='main-area'>
                    <Avatar style={{
                        border: '0,0,1px solid black,0'
                    }}>H</Avatar>
                </div>
                <div className='menubar-button'>
                    <MenuDrawer />
                </div>
            </div>
        </div>
        )
    }

}

export default Homepage;