import { firestore } from "../../firebase/firebase.utils";
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

export const createAnimalStart = () => ({
    type: animalDetailsActionTypes.CREATE_ANIMAL_START
})

export const createAnimalSuccess = (animalDetails) => ({
    type: animalDetailsActionTypes.CREATE_ANIMAL_SUCCESS,
    payload: animalDetails
})

export const createAnimalFailure = (error) => ({
    type: animalDetailsActionTypes.CREATE_ANIMAL_FAILURE,
    payload: error
})

export const createNewAnimalAsync = (animalData) => {
    return dispatch => {
        dispatch(createAnimalStart())
        firestore.collection('animals').add({...animalData}).then(resp => 
            {
                animalData.animalId = resp.id;
                dispatch(createAnimalSuccess(animalData))
            })
        .catch (error => {
            dispatch(createAnimalFailure(error.message));
        })
    }
}


const fetchAnimalStart = () => ({
    type: animalDetailsActionTypes.FETCH_ANIMAL_START
})

const fetchAnimalSuccess = (animalDetails) => ({
    type: animalDetailsActionTypes.FETCH_ANIMAL_SUCCESS,
    payload: animalDetails
})

const fetchAnimalFailure = (error) => ({
    type: animalDetailsActionTypes.FETCH_ANIMAL_FAILURE,
    payload: error
})

export const fetchCampAnimalsAsync = (campId) => {
    return dispatch => {
        dispatch(fetchAnimalStart())
        firestore.collection('animals').where('campId', "==", campId).get()
        .then(resp => 
            {
                // dispatch(clearAnimals())
                return resp.docs.map(doc => {
                    const dat = doc.data();
                    dat.animalId = doc.id;
                    return dat;
                })
            }).then(docs => {
                docs.forEach(doc => {
                    dispatch(createAnimalSuccess(doc))
                });
                return;
            })
        .catch (error => {
            dispatch(fetchAnimalFailure(error.message));
        })
    }
}