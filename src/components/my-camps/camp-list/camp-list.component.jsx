import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { clearAnimalFilters } from '../../../redux/animal-details/animal-details.actions';
import { setSelectedCamp } from '../../../redux/camps/camps.actions';
import { selectCurrentFarmCamps } from '../../../redux/camps/camps.selectors';
import { currentFarmSelector, selectCurrentFarm, selectFarmCollection } from '../../../redux/farm-details/farm-details.selectors';
import FarmHeader from '../../my-farm/farm-header/farm-header.component';
import CustomButton from '../../shared/custom-button/custom-button.component';
import CampListItem from '../camp-list-item/camp-list-item.component';

const CampList = ({camps, history}) => {
    return (
        <div className="camp-list-container">
            <div className="camp-list">
                {
                    camps.map(camp=>(
                        <CampListItem camp={camp} />
                    ))
                }
            </div>
            <div className="add-camp">
                <CustomButton onClick={()=>history.push('/camps/new')}>ADD CAMP</CustomButton>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    camps: selectCurrentFarmCamps
})


export default connect(mapStateToProps)(withRouter(CampList));