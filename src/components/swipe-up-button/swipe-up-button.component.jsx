import React from 'react';
import './swipe-up-button.styles.scss'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import buttonGraphic from './images/SwipeUp.png';

const SwipeUpButton = () =>{

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (state) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setOpen(state);
    };

    const list = () => (
        <div
          className='drawer-list'
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{
              width: 'auto'
          }}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
    );

    return(
        <div className='swipe-up-button'>
          <img src={buttonGraphic} onClick={toggleDrawer(true)} />
          <Drawer anchor='bottom' open={open} onClose={toggleDrawer(false)}>
            {list}
          </Drawer>
        </div>
    )

}

export default SwipeUpButton;