import React from 'react'
import { Route } from 'react-router-dom'
import AnimalFilterDetails from '../../components/my-animals/animal-filter-details/animal-filter-details.component';
import CampAnimals from '../../components/my-camps/camp-animals/camp-animals.component';
import CampEdit from '../../components/my-camps/camp-edit/camp-edit.component';
import CampHeader from '../../components/my-camps/camp-header/camp-header.component';
import CampInfo from '../../components/my-camps/camp-info/camp-info.component';
import NewCamp from '../../components/my-camps/new-camp/new-camp.component';
import MainPage from '../main-page/main-page.component';

const CampPage = ({match}) => {
    return (
        <MainPage>
            <CampHeader />
            {/* <Route path={`${match.path}/edit`} component={AnimalFilterDetails}/> */}
            <Route exact path={`${match.path}/new`} component={NewCamp}/>
            <Route exact path={`${match.path}/info`} component={CampInfo}/>
            <Route exact path={`${match.path}/info/:campId`} component={CampInfo}/>
            <Route exact path={`${match.path}/edit`} component={CampEdit}/>
            <Route exact path={`${match.path}/animals`} component={CampAnimals}/>
            <Route exact path={`${match.path}/`} component={CampInfo}/>
        </MainPage>
    )
}

export default CampPage;