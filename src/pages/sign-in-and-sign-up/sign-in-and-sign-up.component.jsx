import React, { Component } from 'react'
import SignIn from '../../components/profile/credential-management/sign-in/sign-in.component'
import Signup from '../../components/profile/credential-management/sign-up/sign-up.component'
import SimpleActionPage from '../simple-action-page/simple-action-page.component'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const SignInAndSignUpPage = (props) => {
    
    if(props.currentUser != null) props.history.push('/');
    return (
            <SimpleActionPage>
                <SignIn />
                <Signup />
            </SimpleActionPage>
    );
}


const mapGlobalStateToProps = (state) => ({
    currentUser: state.user.currentUser 
});

export default connect(mapGlobalStateToProps)(withRouter(SignInAndSignUpPage));
