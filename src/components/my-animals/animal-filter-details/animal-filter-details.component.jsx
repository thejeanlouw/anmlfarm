import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { updateAnimalFilters } from '../../../redux/animal-details/animal-details.actions'
import { selectFilteredAnimals, selectSelectedCampAnimals } from '../../../redux/animal-details/animal-details.selectors'
import AnimalListItem from '../animal-list-item/animal-list-item.component'

class AnimalFilterDetails extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return(nextProps.match.params != this.props.match.params);
    }

    componentDidMount(){
        // const {match, animalFilter, updateFilter} = this.props;
        // updateFilter(match.params)
        // console.log(animalFilter)
    }
    
    render(){
        return (
            <div className="farm-animals">
                <div className="animal-search"></div>
                <div className="animal-filters"></div>
                { this.props.animalFilter?
                    this.props.animalFilter.map(a=>(
                        <AnimalListItem animal={a} />
                    )): null
                }
                <div className="add-animal"></div>
            </div>
        )
    }

    
}

const mapStateToProps = createStructuredSelector({
    animalFilter: selectSelectedCampAnimals
})

const mapDispatchToProps = dispatch => ({
    updateFilter: filterString => dispatch(updateAnimalFilters(filterString))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnimalFilterDetails);