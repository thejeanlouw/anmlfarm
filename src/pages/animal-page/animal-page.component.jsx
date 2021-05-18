import React from 'react'
import { Route } from 'react-router-dom'
import AnimalEdit from '../../components/my-animals/animal-edit/animal-edit.component'
import AnimalEvaluator from '../../components/my-animals/animal-evaluator/animal-evaluator.component'

import AnimalFilterDetails from '../../components/my-animals/animal-filter-details/animal-filter-details.component'
import AnimalInfo from '../../components/my-animals/animal-info/animal-info.component'
import CampList from '../../components/my-camps/camp-list/camp-list.component'
import MainPage from '../main-page/main-page.component'

export default function AnimalPage({match}) {
    return (
        <MainPage>
            <Route path={`${match.path}/:filters`} component={AnimalFilterDetails}/>
            <Route path={`${match.path}/info`} component={AnimalInfo}/>
            <Route path={`${match.path}/info/:animalId`} component={AnimalInfo}/>
            <Route path={`${match.path}/edit`} component={AnimalEdit}/>
            <Route path={`${match.path}/evaluate`} component={AnimalEvaluator}/>
        </MainPage>
    )
}
