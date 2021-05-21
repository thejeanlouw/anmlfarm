import { firestore } from "../../firebase/firebase.utils";
import farmDetailsActionTypes from "./farm-details.action-types";

export const selectFarm = (farmId) => ({
    type: farmDetailsActionTypes.SELECT_FARM,
    payload: farmId
})

export const createFarmStart = () => ({
    type: farmDetailsActionTypes.CREATE_FARM_START
})

export const createFarmSuccess = (farmDetails) => ({
    type: farmDetailsActionTypes.CREATE_FARM_SUCCESS,
    payload: farmDetails
})

export const createFarmFailure = (error) => ({
    type: farmDetailsActionTypes.CREATE_FARM_FAILURE,
    payload: error
})

export const createNewFarmAsync = (farmData) => {
    return dispatch => {
        dispatch(createFarmStart())
        firestore.collection('farms').add({...farmData}).then(resp => 
            {
                farmData.farmId = resp.id;
                dispatch(createFarmSuccess(farmData))
            })
        .catch (error => {
            dispatch(createFarmFailure(error.message));
        })
    }
}


const fetchFarmStart = () => ({
    type: farmDetailsActionTypes.FETCH_FARM_START
})

const fetchFarmSuccess = (farmDetails) => ({
    type: farmDetailsActionTypes.FETCH_FARM_SUCCESS,
    payload: farmDetails
})

const fetchFarmFailure = (error) => ({
    type: farmDetailsActionTypes.FETCH_FARM_FAILURE,
    payload: error
})

export const fetchUserFarmsAsync = (userId) => {
    return dispatch => {
        dispatch(fetchFarmStart())

        firestore.collection('farms').where('creatingUserId', "==", userId).get()
        .then(resp => 
            {
                return resp.docs.map(doc => {
                    const dat = doc.data();
                    dat.farmId = doc.id;
                    return dat;
                })
            }).then(docs => {
                docs.forEach(doc => {
                    dispatch(createFarmSuccess(doc))
                });
                return;
            })
        .catch (error => {
            dispatch(fetchFarmFailure(error.message));
        })
    }
}