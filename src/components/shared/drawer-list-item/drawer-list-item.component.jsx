import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {togglePopupTrue, togglePopupFalse, toggleDrawerFalse} from '../../../redux/controls/page-controls/page-controls-actions'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Popup from '../popup/popup.component';

const DrawerListItem = ({id, history, iconImageUrl, text, linkToLocal, linkToExternal, popupComponent, togglePopupTrue, toggleDrawerFalse}) => {

    togglePopupFalse();
    const onClickHandler = e => {
        if(linkToLocal){
            history.push(linkToLocal)
        } else if(linkToExternal){
            popupComponent = () => (<iframe src={linkToExternal} width="540" height="450"/>)};

        if(popupComponent){
            togglePopupTrue();
        } else {
            toggleDrawerFalse();
        }
    }
    
    return (
    <div className='list-item' onClick={onClickHandler}>
        <ListItem button key={id}>
                <ListItemIcon className='list-item-icon'>
                    <img src={iconImageUrl} />
                </ListItemIcon>
                <ListItemText primary={text} className='list-item-text'/>
        </ListItem> 
        {popupComponent? <Popup> {popupComponent} </Popup>: null }
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    togglePopupTrue: () => dispatch(togglePopupTrue()),
    togglePopupFalse: () => dispatch(togglePopupFalse()),
    toggleDrawerFalse: () => dispatch(toggleDrawerFalse())
})

const mapStateToProps = state => ({
    popupOpen: state.controls.popupOpen
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DrawerListItem))
