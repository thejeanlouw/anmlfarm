import React from 'react';
import './homepage.styles.css'

import MainPage from '../main-page/main-page.component';
import SignIn from '../../components/profile/credential-management/sign-in/sign-in.component';
import Signup from '../../components/profile/credential-management/sign-up/sign-up.component';
import { Redirect } from 'react-router';

const ProfilePage = ({match}) => {

    return(
        <MainPage>
            <Route path={`${match.path}/signin`} component={SignIn}/>
            <Route path={`${match.path}/signup`} component={Signup}/>
            <Route path={`${match.path}/onboarding`} render={()=>(<Redirect to='/onboarding' />)} />
            {/* <Route path={`${match.path}/subscription`} component={AnimalFilterDetails}/> */}
            {/* <Route path={`${match.path}/terms`} component={AnimalFilterDetails}/> */}
            {/* <Route path={`${match.path}/privacy`} component={AnimalFilterDetails}/> */}
            {/* <Route path={`${match.path}/edit`} component={AnimalFilterDetails}/> */}
            {/* <Route path={`${match.path}/info`} component={AnimalFilterDetails}/> */}
        </MainPage>
    )

}

const map

export default ProfilePage;