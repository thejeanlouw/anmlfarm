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

        case animalDetailsActionTypes.CREATE_ANIMAL_START:
            return {
                ...state,
                processing: true
            }

        case animalDetailsActionTypes.CREATE_ANIMAL_FAILURE:
            return {
                ...state,
                error: action.payload,
                processing: false
            }

        case animalDetailsActionTypes.FETCH_ANIMAL_START:
            return {
                ...state,
                processing: true
            }

        case animalDetailsActionTypes.FETCH_ANIMAL_FAILURE:
            return {
                ...state,
                error: action.payload,
                processing: false
            }

        case animalDetailsActionTypes.CREATE_ANIMAL_SUCCESS:
            return {
                ...state,
                processing: false,
                farmAnimals: {
                    ...state.farmAnimals,
                    [action.payload.animalId]: action.payload
                },
                selectedAnimal: action.payload.animalId
            }

        case animalDetailsActionTypes.FETCH_ANIMAL_SUCCESS:
            return {
                ...state,
                processing: false,
                farmAnimals: {
                    ...state.farmAnimals,
                    ...action.payload
                },
            }

        default:
            return state;
    }
}

export default animalDetailsReducer;