import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';
import CampList from '../../components/my-camps/camp-list/camp-list.component';
import FarmHeader from '../../components/my-farm/farm-header/farm-header.component';
import FarmInfo from '../../components/my-farm/farm-info/farm-info.component';
import NewFarm from '../../components/my-farm/new-farm/new-farm.component';
import { fetchFarmCampsAsync } from '../../redux/camps/camps.actions';
import { fetchUserFarmsAsync } from '../../redux/farm-details/farm-details.actions';
import { selectCurrentFarm } from '../../redux/farm-details/farm-details.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import MainPage from '../main-page/main-page.component';

class FarmPage extends Component {

    componentDidMount(){
        const {user, fetchUserFarmsAsync, farm, fetchFarmCampsAsync} = this.props;
        if(user && user.id && fetchUserFarmsAsync) fetchUserFarmsAsync(user.id)
        if(farm && farm.farmId) fetchFarmCampsAsync(farm.farmId);
    }

    render(){
        const {match} = this.props;
        return (
            <MainPage>
                <FarmHeader />
                {/* <Route path={`${match.path}/edit`} component={AnimalFilterDetails}/> */}
                {/* <Route path={`${match.path}/new`} component={AnimalFilterDetails}/> */}
                <Route exact path={`${match.path}/new`} component={NewFarm}/>
                <Route exact path={`${match.path}/camps`} component={CampList}/>
                <Route exact path={`${match.path}/info/:farmId`} component={FarmInfo}/>
                <Route exact path={`${match.path}/info/`} component={FarmInfo}/>
                <Route exact path={`${match.path}/`} component={FarmInfo}/>
            </MainPage>
        )
    }
}


const mapStateToProps = createStructuredSelector({
    farm: selectCurrentFarm,
    user: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    fetchUserFarmsAsync: userId => dispatch(fetchUserFarmsAsync(userId)),
    fetchFarmCampsAsync: farmId => dispatch(fetchFarmCampsAsync(farmId))
})


export default connect(mapStateToProps,mapDispatchToProps)(FarmPage);