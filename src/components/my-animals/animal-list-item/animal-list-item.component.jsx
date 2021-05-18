import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setSelectedAnimal } from '../../../redux/animal-details/animal-details.actions';

const AnimalListItem = ({setAnimal, animal, history}) => {
    
    const animalClick = () => {
        setAnimal(animal.id);
        history.push('/animals/info')
    }

    const recentlyChecked = () => {
        const currentDate = new Date();
        const oldestDate = Date.parse('1 Jan 1970');
        if(animal.locations && animal.locations[animal.locations.length-1]){
            oldestDate = Date.parse(animal.locations[animal.locations.length-1].dateTime);
        };
        const lastOnlineDiff = Math.abs(currentDate - oldestDate) / 36e5;
        return (lastOnlineDiff > 24);
    }

    return (
        <div className="animal-row-details" onClick={animalClick}>
            <div className="tagNumber">
                {animal.tagNumber}
            </div>
            <div className="name">
                {animal.name}
            </div>
            <div className="lastWeight">
                {animal.weights[animal.weights.length-1]}
            </div>
            {  recentlyChecked ? <svg width="25" height="25"><circle cx="12.5" cy="12.5" fill="green"></circle></svg>
                : <svg width="25" height="25"><circle cx="12.5" cy="12.5" fill="red"></circle></svg>
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setAnimal: animalId => dispatch(setSelectedAnimal(animalId))
})

export default connect(null, mapDispatchToProps)(withRouter(AnimalListItem));