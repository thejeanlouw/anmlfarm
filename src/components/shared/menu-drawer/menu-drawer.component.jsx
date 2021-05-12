import React from 'react';
import {Link} from 'react-router-dom';
import './menu-drawer.styles.scss'
import {toggleDrawerTrue, toggleDrawerFalse} from '../../../redux/controls/page-controls/page-controls-actions'


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

class MenuDrawer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
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
                // {
                //     id: 3,
                //     text: 'Community', 
                //     imageUrl: '',
                //     linkToExternal: 'https://www.parangelmata.com/forum', 
                //     iconImageUrl: community
                // },
                // {
                //     id: 4,
                //     text: 'My Farm', 
                //     imageUrl: '',
                //     linkToExternal: 'https://www.parangelmata.com/plans-pricing', 
                //     iconImageUrl: report
                // },
                {
                    id: 5,
                    text: 'My Animals', 
                    imageUrl: '',
                    linkToExternal: 'https://www.parangelmata.com/plans-pricing', 
                    iconImageUrl: animal
                },
                {
                    id: 6,
                    text: 'My Profile', 
                    imageUrl: '',
                    linkToExternal: 'https://www.parangelmata.com/plans-pricing', 
                    iconImageUrl: profile
                },
                // {
                //     id: 7,
                //     text: 'Capture', 
                //     imageUrl: '',
                //     popupComponent: <ImageCapture />, 
                //     iconImageUrl: capture
                // },
            ]
        }
    }

    toggleDrawer = (state) => (event) => {
        
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        if(state){
            this.props.toggleDrawerTrue();
        }
        else if(!this.props.popupOpen) {
            this.props.toggleDrawerFalse();
        }
    };


    render(){
        return(
            <div className='menu-drawer'>
                <div className='drawer-button'>
                    <SwipeUpButton callback={this.toggleDrawer(true)}/>
                </div>
                <Drawer anchor='bottom' open={this.props.drawerOpen} onClose={this.toggleDrawer(false)}>
                    <div
                        className='drawer-list'
                        role="presentation"
                        style={{
                            width: 'auto'
                        }}
                    >
                        <List>
                            {this.state.listItems ? this.state.listItems.map(({id, ...otherInfo}) => (
                                <DrawerListItem id={id} {...otherInfo} />
                            )): null}
                        </List>
                    </div>
                </Drawer>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    toggleDrawerTrue: () => dispatch(toggleDrawerTrue()),
    toggleDrawerFalse: () => dispatch(toggleDrawerFalse())
})

const mapStateToProps = state => ({
    popupOpen: state.controls.popupOpen,
    drawerOpen: state.controls.drawerOpen,
})


export default connect(mapStateToProps,mapDispatchToProps )(MenuDrawer);