import animalDetailsActionTypes from "./animal-details.action-types"
import { mapStringToFilters } from "./animal-details.utils"

export const clearAnimalFilters = () => ({
    type: animalDetailsActionTypes.CLEAR_FILTERS
})

export const updateAnimalFilters = (filterString) => ({
    type: animalDetailsActionTypes.UPDATE_FILTERS,
    payload: filterString
})

export const setSelectedAnimal = (animalId) => ({
    type: animalDetailsActionTypes.SET_SELECTED_ANIMAL,
    payload: animalId
})