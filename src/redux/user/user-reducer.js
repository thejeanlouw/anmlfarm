import UserActionTypes from './user-action-types'

const INITIAL_STATE = {
    currentUser: null,
    hasDoneOnboarding: false,
    hasDoneProfile: false,
    hasDoneTerms: false
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
                hasDoneProfile: true
            }

        case UserActionTypes.SET_TERMS_ACCEPTED:
            return {
                ...currentState,
                hasDoneTerms: true
            }

        case UserActionTypes.SET_ONBOARDING_DONE:
            return {
                ...currentState,
                hasDoneOnboarding: true
            }

        default:
            return currentState;
    }
}

export default userReducer;