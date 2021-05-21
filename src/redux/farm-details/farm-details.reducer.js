import farmDetailsActionTypes from "./farm-details.action-types";

const INITIAL_STATE = {
    error: undefined,
    processing: false,
    selectedFarm: '',
    connectedFarms: {
    }
    
}

const farmsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case farmDetailsActionTypes.SELECT_FARM:
            return {
                ...state,
                selectedFarm: action.payload
            }

        case farmDetailsActionTypes.CREATE_FARM_START:
            return {
                ...state,
                processing: true
            }

        case farmDetailsActionTypes.CREATE_FARM_FAILURE:
            return {
                ...state,
                error: action.payload,
                processing: false
            }

        case farmDetailsActionTypes.FETCH_FARM_START:
            return {
                ...state,
                processing: true
            }

        case farmDetailsActionTypes.FETCH_FARM_FAILURE:
            return {
                ...state,
                error: action.payload,
                processing: false
            }

        case farmDetailsActionTypes.CREATE_FARM_SUCCESS:
            return {
                ...state,
                processing: false,
                connectedFarms: {
                    ...state.connectedFarms,
                    [action.payload.farmId]: action.payload
                },
                selectedFarm: action.payload.farmId
            }

        case farmDetailsActionTypes.FETCH_FARM_SUCCESS:
            return {
                ...state,
                processing: false,
                connectedFarms: action.payload
            }

        default:
            return state;
    }
}

export default farmsReducer;