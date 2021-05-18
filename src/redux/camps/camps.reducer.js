import campActionTypes from "./camps.action-types";

const INITIAL_STATE = {
    selectedCampId: 'CMP1',
    connectedCamps: {
        CMP1: {
            id: 'CMP1',
            farmId: 'FRM1',
            name: 'Sheep',
            size: 12
        }
    }
}

const campReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case campActionTypes.SELECT_CAMP:
            return {
                ...state,
                selectedCampId: action.payload
            }

        default:
            return state;
    }
}

export default campReducer;