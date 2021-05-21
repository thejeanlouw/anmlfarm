import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { updateAnimalFilters } from '../../../redux/animal-details/animal-details.actions';
import { selectCamp } from '../../../redux/camps/camps.actions';
import GenericCardItem from '../../shared/generic-card-item/generic-card-item.component';

const CampListItem = ({setCamp, history, camp}) => {
    
    const gotoCamp = () => {
        setCamp(camp?.campId);
        history.push(`/camps/animals`);
    }
    return (
        <GenericCardItem id={camp?.id} title={camp?.displayName} callback={gotoCamp}>
            <div className="camp-list-item">
                <div className="camp-size">
                    Purpose: {camp?.campPurpose}
                </div>
            </div>
        </GenericCardItem>
    )
}

const mapDispatchToProps = dispatch => ({
    // updateFilter: filterString => dispatch(updateAnimalFilters(filterString))
    setCamp: campId => dispatch(selectCamp(campId))
})

export default withRouter(connect(null,mapDispatchToProps)(CampListItem));