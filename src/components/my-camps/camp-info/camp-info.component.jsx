import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {setSelectedCamp} from '../../../redux/camps/camps.actions';
import { selectSelectedCamp } from '../../../redux/camps/camps.selectors';

const CampInfo = ({camp, setCamp, campId, match}) => {
    console.log('selectSelectedCamp',camp)
    if((!campId && !camp) && match.params.campId)
    {
        console.log('params campId', match.params.campId)
        setCamp(match.params.campId);
    }
    if(!camp) return null;
    if(match.params.campId && match.params.campId != camp.id) return null;
    const {farmId, id, name, size} = camp;
    return(
        <div className="camp-info">
            CAMP INFO
            farmId: {farmId}
            id: {id}
            name: {name}
            size: {size}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    camp: selectSelectedCamp
})
const mapDispatchToProps = dispatch => ({
    setCamp: campId => dispatch(setSelectedCamp(campId))
})
export default connect(mapStateToProps, mapDispatchToProps)(CampInfo);