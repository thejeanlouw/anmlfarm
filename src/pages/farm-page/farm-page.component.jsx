import React from 'react'
import { Route } from 'react-router-dom'
import CampList from '../../components/my-camps/camp-list/camp-list.component';
import FarmHeader from '../../components/my-farm/farm-header/farm-header.component';
import FarmInfo from '../../components/my-farm/farm-info/farm-info.component';
import MainPage from '../main-page/main-page.component';

const FarmPage = ({match}) => {
    return (
        <MainPage>
            <FarmHeader />
            {/* <Route path={`${match.path}/edit`} component={AnimalFilterDetails}/> */}
            {/* <Route path={`${match.path}/new`} component={AnimalFilterDetails}/> */}
            <Route path={`${match.path}/camps`} component={CampList}/>
            <Route path={`${match.path}/:farmId`} component={FarmInfo}/>
            <Route exact path={`${match.path}/`} component={FarmInfo}/>
        </MainPage>
    )
}

export default FarmPage;