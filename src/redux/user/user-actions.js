import UserActionTypes from './user-action-types'

export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const clearCurrentUser = (user) => ({
    type: UserActionTypes.CLEAR_CURRENT_USER
});

export const setProfileComplete = () => ({
    type: UserActionTypes.SET_PROFILE_COMPLETE
});

export const setOnboardingDone = () => ({
    type: UserActionTypes.SET_ONBOARDING_DONE
});