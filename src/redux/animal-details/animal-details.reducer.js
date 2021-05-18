import animalDetailsActionTypes from "./animal-details.action-types";
import ANIMAL_DETAILS_INITIAL_STATE from "./animal-details.state";
import { mapStringToFilters } from "./animal-details.utils";


const animalDetailsReducer = (state = ANIMAL_DETAILS_INITIAL_STATE, action) => {
    switch(action.type){
        case animalDetailsActionTypes.CLEAR_FILTERS:
            return {
                ...state,
                animalFilters: {}
            };

        case animalDetailsActionTypes.SET_SELECTED_ANIMAL:
            return {
                ...state,
                selectedAnimalId: action.payload
            };

        case animalDetailsActionTypes.UPDATE_FILTERS:
            return {
                ...state,
                animalFilters: mapStringToFilters(action.payload)
            }

        default:
            return state;
    }
}

export default animalDetailsReducer;