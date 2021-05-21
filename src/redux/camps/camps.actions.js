import { firestore } from "../../firebase/firebase.utils";
import campDetailsActionTypes from "./camps.action-types";

export const selectCamp = (campId) => ({
    type: campDetailsActionTypes.SELECT_CAMP,
    payload: campId
})


export const clearCamps = () => ({
    type: campDetailsActionTypes.CLEAR_CAMPS
})


export const createCampStart = () => ({
    type: campDetailsActionTypes.CREATE_CAMP_START
})

export const createCampSuccess = (campDetails) => ({
    type: campDetailsActionTypes.CREATE_CAMP_SUCCESS,
    payload: campDetails
})

export const createCampFailure = (error) => ({
    type: campDetailsActionTypes.CREATE_CAMP_FAILURE,
    payload: error
})

export const createNewCampAsync = (campData) => {
    return dispatch => {
        dispatch(createCampStart())
        firestore.collection('camps').add({...campData}).then(resp => 
            {
                campData.campId = resp.id;
                dispatch(createCampSuccess(campData))
            })
        .catch (error => {
            dispatch(createCampFailure(error.message));
        })
    }
}


const fetchCampStart = () => ({
    type: campDetailsActionTypes.FETCH_CAMP_START
})

const fetchCampSuccess = (campDetails) => ({
    type: campDetailsActionTypes.FETCH_CAMP_SUCCESS,
    payload: campDetails
})

const fetchCampFailure = (error) => ({
    type: campDetailsActionTypes.FETCH_CAMP_FAILURE,
    payload: error
})

export const fetchFarmCampsAsync = (farmId) => {
    return dispatch => {
        dispatch(fetchCampStart())
        firestore.collection('camps').where('farmId', "==", farmId).get()
        .then(resp => 
            {
                dispatch(clearCamps())
                return resp.docs.map(doc => {
                    const dat = doc.data();
                    dat.campId = doc.id;
                    return dat;
                })
            }).then(docs => {
                docs.forEach(doc => {
                    dispatch(createCampSuccess(doc))
                });
                return;
            })
        .catch (error => {
            dispatch(fetchCampFailure(error.message));
        })
    }
}