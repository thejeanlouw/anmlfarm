import React from 'react'
import { createStructuredSelector } from 'reselect';
import { selectCurrentSelectedAnimal } from '../../../redux/animal-details/animal-details.selectors';

const AnimalInfo = ({animalDetails, animalId}) => {
    return (
        <div>
            DETAILS
            {animalDetails ? animalDetails.name : null}
            {animalId}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    animalDetails: selectCurrentSelectedAnimal
})

export default AnimalInfo;