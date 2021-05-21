import React from 'react'
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './camp-header.styles.scss'
import { selectCurrentFarm } from '../../../redux/farm-details/farm-details.selectors';
import { withRouter } from 'react-router';
import { selectCurrentCamp } from '../../../redux/camps/camps.selectors';

const CampHeader = ({campId, camp, history}) => {
    const redirectOnClick = () => {
        if(camp){
         history.push(`/camps/info`)
        } else history.push(`/camps/new`)
    }
    return (
        <div className='header' onClick={redirectOnClick}>
            <div className='camp-pic'>
                {(camp && camp.campImage) ? 
                    <Avatar className='avatar' src={camp?.campImage} /> : 
                <Avatar className='avatar'>{camp?.displayName ? camp?.displayName[0] : '?'}</Avatar>}
            </div>
            <div className='welcome-text'>
                {camp?.displayName ?? 'No Camp Found. Tap To Create a Camp.'}
            </div>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    camp: selectCurrentCamp
})

export default connect(mapStateToProps)(withRouter(CampHeader));
