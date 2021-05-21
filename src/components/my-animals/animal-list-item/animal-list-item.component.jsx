import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setSelectedAnimal } from '../../../redux/animal-details/animal-details.actions';
import CustomButton from '../../shared/custom-button/custom-button.component';
import GenericCardItem from '../../shared/generic-card-item/generic-card-item.component';

const AnimalListItem = ({setAnimal, animal, history}) => {
    
    const animalClick = () => {
        setAnimal(animal.id);
        history.push('/animals/info')
    }

    
    return (
        <GenericCardItem callback={animalClick} title={animal.tagNumber} imageUrl={animal.animalImages?animal.animalImages[0]:null}>
            <div className="tagNumber">
                Name: {animal.displayName}
            </div>
            <div className="tagNumber">
                Tag Number: {animal.tagNumber}
            </div>
            <div className="name">
                Type: {animal.animalType}
            </div>
            <div className="name">
                Breed: {animal.animalBreed}
            </div>
            
        </GenericCardItem>
    )
}

const mapDispatchToProps = dispatch => ({
    setAnimal: animalId => dispatch(setSelectedAnimal(animalId))
})

export default connect(null, mapDispatchToProps)(withRouter(AnimalListItem));