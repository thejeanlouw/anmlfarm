import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { clearAnimalFilters } from '../../../redux/animal-details/animal-details.actions';
import { selectCurrentCampAnimalsAsArray } from '../../../redux/animal-details/animal-details.selectors';
import { selectCurrentFarmCamps, selectSelectedCamp } from '../../../redux/camps/camps.selectors';
import { currentFarmSelector, selectCurrentFarm, selectFarmCollection } from '../../../redux/farm-details/farm-details.selectors';
import AnimalListItem from '../../my-animals/animal-list-item/animal-list-item.component';
import FarmHeader from '../../my-farm/farm-header/farm-header.component';
import CustomButton from '../../shared/custom-button/custom-button.component';
import CampHeader from '../camp-header/camp-header.component';
import CampListItem from '../camp-list-item/camp-list-item.component';

const CampAnimals = ({animals, history}) => {
    debugger;
    return (
        <div className="camp-animals">
            <div className="animal-list">
                {
                    animals.map(animal=>(
                        <AnimalListItem animal={animal} />
                    ))
                }
            </div>
            <div className="add-camp">
                <CustomButton onClick={()=>history.push('/animals/new')}> + ADD ANIMAL</CustomButton>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    animals: selectCurrentCampAnimalsAsArray
})


export default connect(mapStateToProps)(withRouter(CampAnimals));