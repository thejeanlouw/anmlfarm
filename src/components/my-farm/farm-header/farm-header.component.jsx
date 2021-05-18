import React from 'react'
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './farm-header.styles.scss'
import { selectCurrentFarm } from '../../../redux/farm-details/farm-details.selectors';
import { withRouter } from 'react-router';

const FarmHeader = ({farm, history}) => {
    const redirectOnClick = () => {
        if(farm){
         history.push('/farm')
        } else history.push('/new')

    }
    return (
        <div className='header' onClick={redirectOnClick}>
            <div className='farm-pic'>
                {(farm && farm.farmPhotoUrl) ? 
                    <Avatar className='avatar' src={farm?.farmPhotoUrl} /> : 
                <Avatar className='avatar'>{farm?.farmName ? farm?.farmName[0] : '?'}</Avatar>}
            </div>
            <div className='welcome-text'>
                {farm?.farmName ?? 'No Farm Found. Tap To Create a Farm.'}
            </div>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    farm: selectCurrentFarm
})

export default connect(mapStateToProps)(withRouter(FarmHeader));
