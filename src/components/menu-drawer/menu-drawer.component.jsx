import React from 'react';
import {Link} from 'react-router-dom';
import './menu-drawer.styles.scss'


import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import home from './images/home.png'
import library from './images/library.png'
import capture from './images/capture.png'
import profile from './images/profile.png'
import community from './images/community.png'
import SwipeUpButton from '../swipe-up-button/swipe-up-button.component';

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
                    linkTo: '/home', 
                    iconImageUrl: home
                },
                {
                    id: 2,
                    text: 'Library', 
                    imageUrl: '',
                    linkTo: '/library', 
                    iconImageUrl: library
                },
                {
                    id: 3,
                    text: 'Community', 
                    imageUrl: '',
                    linkTo: 'https://www.parangelmata.com/forum', 
                    iconImageUrl: home
                },
                {
                    id: 4,
                    text: 'My Farm', 
                    imageUrl: '',
                    linkTo: 'https://www.parangelmata.com/plans-pricing', 
                    iconImageUrl: profile
                },
                {
                    id: 5,
                    text: 'Capture', 
                    imageUrl: '',
                    linkTo: 'https://docs.google.com/forms/d/e/1FAIpQLSc-fqhvOYDz5fqVWXGDbkT6OxIf1LC79oZVmzzS7GJ5YaTAqw/viewform', 
                    iconImageUrl: capture
                },
            ]
        }
    }

    toggleDrawer = (state) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        this.setState({drawerOpen: state});
    };


    render(){
        return(
            <div className='menu-drawer'>
                <div className='drawer-button'>
                    <SwipeUpButton callback={this.toggleDrawer(true)}/>
                </div>
                <Drawer anchor='bottom' open={this.state.drawerOpen} onClose={this.toggleDrawer(false)}>
                    <div
                        className='drawer-list'
                        role="presentation"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                        style={{
                            width: 'auto'
                        }}
                    >
                        <List>
                            {this.state.listItems ? this.state.listItems.map(({id, text, linkTo, iconImageUrl}) => (
                            <a href={linkTo} target="_blank" className='list-item'>
                                <ListItem button key={id} >
                                    <ListItemIcon className='list-item-icon'>
                                        <img src={iconImageUrl} />
                                    </ListItemIcon>
                                    <ListItemText primary={text} className='list-item-text'/>
                                </ListItem> 
                            </a>

                            )): null}
                            
                        </List>
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default MenuDrawer;