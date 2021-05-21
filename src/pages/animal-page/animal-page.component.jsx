import React from 'react'
import { Route } from 'react-router-dom'
import AnimalEdit from '../../components/my-animals/animal-edit/animal-edit.component'
import AnimalEvaluator from '../../components/my-animals/animal-evaluator/animal-evaluator.component'

import AnimalFilterDetails from '../../components/my-animals/animal-filter-details/animal-filter-details.component'
import AnimalInfo from '../../components/my-animals/animal-info/animal-info.component'
import NewAnimal from '../../components/my-animals/new-animal/new-animal.component'
import CampList from '../../components/my-camps/camp-list/camp-list.component'
import MainPage from '../main-page/main-page.component'

export default function AnimalPage({match}) {
    return (
        <MainPage>
            <Route exact path={`${match.path}/info`} component={AnimalInfo}/>
            <Route exact path={`${match.path}/info/:animalId`} component={AnimalInfo}/>
            <Route exact path={`${match.path}/edit`} component={AnimalEdit}/>
            <Route exact path={`${match.path}/evaluate`} component={AnimalEvaluator}/>
            <Route exact path={`${match.path}/new`} component={NewAnimal}/>
            {/* <Route exact path={`${match.path}/:filters`} component={AnimalFilterDetails}/> */}
            <Route exact path={`${match.path}/`} component={AnimalFilterDetails}/>
        </MainPage>
    )
}
