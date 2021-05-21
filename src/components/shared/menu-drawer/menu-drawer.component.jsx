import React from 'react';
import {Link} from 'react-router-dom';
import './menu-drawer.styles.scss'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import DrawerListItem from '../drawer-list-item/drawer-list-item.component'
import ImageCapture from '../image-capture/image-capture.component'

import home from './images/home.png'
import library from './images/library.png'
import capture from './images/capture.png'
import report from './images/report.png'
import profile from './images/profile.png'
import animal from './images/animal.png'
import community from './images/community.png'
import SwipeUpButton from '../swipe-up-button/swipe-up-button.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../redux/user/user.selectors';

class MenuDrawer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            drawerOpen: false,
            listItems: [
                {
                    id: 1,
                    text: 'Home', 
                    imageUrl: '',
                    linkToLocal: `/home`, 
                    iconImageUrl: home
                },
                {
                    id: 2,
                    text: 'Library', 
                    imageUrl: '',
                    linkToLocal: `/library`, 
                    iconImageUrl: library
                },
                {
                    id: 5,
                    text: 'Animals', 
                    imageUrl: '',
                    linkToLocal: `/farms/camps`, 
                    iconImageUrl: animal
                },
                {
                    id: 6,
                    text: 'My Profile', 
                    imageUrl: '',
                    linkToExternal: '/profile', 
                    iconImageUrl: profile
                }
            ]
        }
    }

    toggleDrawer = (state) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        if(state){
            this.setState({drawerOpen:state})
        }
    };


    render(){
        return(
            <div className='menu-drawer'>
                <div className='drawer-button'>
                    <SwipeUpButton callback={this.toggleDrawer(true)}/>
                </div>
                <Drawer anchor='bottom' open={this.state.drawerOpen} onClose={()=>this.setState({drawerOpen:false})}>
                    <div
                        className='drawer-list'
                        role="presentation"
                        style={{
                            width: 'auto'
                        }}
                    >
                        <List>
                            {this.state.listItems && this.props.user ? this.state.listItems.map(({id, ...otherInfo}) => (
                                <DrawerListItem key={id} id={id} {...otherInfo} />
                            )): <DrawerListItem text={'Sign In'} iconImageUrl={profile} linkToLocal={'/signin'}/>}
                        </List>
                    </div>
                </Drawer>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

export default connect(mapStateToProps)(MenuDrawer);