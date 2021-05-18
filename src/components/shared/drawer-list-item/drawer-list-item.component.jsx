import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Popup from '../popup/popup.component';

const DrawerListItem = ({id, history, iconImageUrl, text, linkToLocal}) => {

    const onClickHandler = e => {
        if(linkToLocal){
            history.push(linkToLocal)
        };
    }
    
    return (
    <div className='list-item' onClick={onClickHandler}>
        <ListItem button key={id}>
                <ListItemIcon className='list-item-icon'>
                    <img src={iconImageUrl} />
                </ListItemIcon>
                <ListItemText primary={text} className='list-item-text'/>
        </ListItem> 
    </div>
    )
}




export default withRouter(DrawerListItem)
