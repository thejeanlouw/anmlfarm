import campDetailsActionTypes from "./camps.action-types";

const INITIAL_STATE = {
    error: undefined,
    processing: false,
    selectedCamp: '',
    connectedCamps: {
    }
    
}

const campsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case campDetailsActionTypes.SELECT_CAMP:
            return {
                ...state,
                selectedCamp: action.payload
            }

        case campDetailsActionTypes.CLEAR_CAMPS:
            return {
                ...state,
                selectedCamp: '',
                connectedCamps: {}
            }

        case campDetailsActionTypes.CREATE_CAMP_START:
            return {
                ...state,
                processing: true
            }

        case campDetailsActionTypes.CREATE_CAMP_FAILURE:
            return {
                ...state,
                error: action.payload,
                processing: false
            }

        case campDetailsActionTypes.FETCH_CAMP_START:
            return {
                ...state,
                processing: true
            }

        case campDetailsActionTypes.FETCH_CAMP_FAILURE:
            return {
                ...state,
                error: action.payload,
                processing: false
            }

        case campDetailsActionTypes.CREATE_CAMP_SUCCESS:
            return {
                ...state,
                processing: false,
                connectedCamps: {
                    ...state.connectedCamps,
                    [action.payload.campId]: action.payload
                },
                selectedCamp: action.payload.campId
            }

        case campDetailsActionTypes.FETCH_CAMP_SUCCESS:
            return {
                ...state,
                processing: false,
                connectedCamps: action.payload
            }

        default:
            return state;
    }
}

export default campsReducer;