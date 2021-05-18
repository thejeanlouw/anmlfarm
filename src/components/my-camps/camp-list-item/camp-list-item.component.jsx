import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateAnimalFilters } from '../../../redux/animal-details/animal-details.actions';
import { setSelectedCamp } from '../../../redux/camps/camps.actions';
import GenericCardItem from '../../shared/generic-card-item/generic-card-item.component';

const CampListItem = ({setCamp, history, match, camp}) => {
    
    console.log('camp list item', camp)
    const gotoCamp = () => {
        console.log('camp list item 2', camp)
        console.log('camp list item 2 id', camp?.id)
        // updateFilter({filters:`campId=${id}`});
        setCamp(camp?.id);
        history.push(`/camps/animals`);
    }
    return (
        <GenericCardItem id={camp?.id} title={camp?.name} onClick={gotoCamp}>
            <div className="camp-list-item"  onClick={gotoCamp}>
                <div className="camp-size" onClick={gotoCamp}>
                    Size: {camp?.size}
                </div>
            </div>
        </GenericCardItem>

        
    )
}

const mapDispatchToProps = dispatch => ({
    // updateFilter: filterString => dispatch(updateAnimalFilters(filterString))
    setCamp: campId => dispatch(setSelectedCamp(campId))
})

export default withRouter(connect(null,mapDispatchToProps)(CampListItem));