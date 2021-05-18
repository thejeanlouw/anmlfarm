import UserActionTypes from './user-action-types'

const INITIAL_STATE = {
    currentUser: null,
}

const userReducer = (currentState = INITIAL_STATE, action) =>{
    const {type, payload} = action;
    switch(type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...currentState,
                currentUser: payload
            }

        case UserActionTypes.SET_PROFILE_COMPLETE:
            return {
                ...currentState,
                currentUser: {
                    ...currentState.currentUser,
                    hasDoneProfile: true
                }
            }

        case UserActionTypes.SET_TERMS_ACCEPTED:
            return {
                ...currentState,
                currentUser: {
                    ...currentState.currentUser,
                    hasDoneTerms: true}
            }

        case UserActionTypes.SET_ONBOARDING_DONE:
            return {
                ...currentState,
                currentUser: {
                    ...currentState.currentUser,
                    hasDoneOnboarding: true}
            }

        default:
            return currentState;
    }
}

export default userReducer;