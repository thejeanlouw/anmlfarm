import React from 'react';
import './main-page.styles.scss'

import MenuDrawer from '../../components/shared/menu-drawer/menu-drawer.component';

class MainPage extends React.Component{

    render(){
        return(
        <div className='main-page'>
            <div className='stage'>
                <div className='content'>
                    {this.props.children}
                </div>
                <div className='menubar'>
                    <MenuDrawer />
                </div>
            </div>
            
        </div>
        )
    }

}

export default MainPage;