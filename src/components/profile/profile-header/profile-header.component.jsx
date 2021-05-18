import React from 'react'
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../redux/user/user.selectors';

import './profile-header.styles.scss'
import { withRouter } from 'react-router';

const ProfileHeader = ({user, history, match}) => {
    const redirectOnClick = () => {
        if(user){
         history.push('/profile')
        } else history.push('/signin')

    }
    return (
        <div className='header' onClick={redirectOnClick}>
            <div className='profile-pic'>
                {(user && user.photoURL) ? 
                    <Avatar className='avatar' src={user?.photoURL} /> : 
                <Avatar className='avatar'>{user?.displayName ? user?.displayName[0] : '?'}</Avatar>}
            </div>
            <div className='welcome-text'>
                Welcome {user?.displayName ?? 'stranger!'}
            </div>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

export default connect(mapStateToProps)( withRouter( ProfileHeader));
