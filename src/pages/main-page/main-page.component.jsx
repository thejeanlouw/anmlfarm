import React from 'react';
import './main-page.styles.scss'

import MenuDrawer from '../../components/menu-drawer/menu-drawer.component';

class MainPage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className='main-page'>
            <div className='border'>
                <div className='main-area'>
                   {this.props.children}
                </div>
                <div className='menubar-button'>
                    <MenuDrawer />
                </div>
            </div>
        </div>
        )
    }

}

export default MainPage;