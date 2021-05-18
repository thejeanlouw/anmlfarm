import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { clearAnimalFilters } from '../../../redux/animal-details/animal-details.actions';
import { selectSelectedCampAnimalsAsArray } from '../../../redux/animal-details/animal-details.selectors';
import { selectCurrentFarmCamps, selectSelectedCamp } from '../../../redux/camps/camps.selectors';
import { currentFarmSelector, selectCurrentFarm, selectFarmCollection } from '../../../redux/farm-details/farm-details.selectors';
import AnimalListItem from '../../my-animals/animal-list-item/animal-list-item.component';
import FarmHeader from '../../my-farm/farm-header/farm-header.component';
import CampListItem from '../camp-list-item/camp-list-item.component';

const CampAnimals = ({animals}) => {
    return (
        <div className="camp-list">
            <CampHeader />
            {
                animals.map(animal=>(
                    <AnimalListItem animal={animal} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    animals: selectSelectedCampAnimalsAsArray
})


export default connect(mapStateToProps)(CampAnimals);