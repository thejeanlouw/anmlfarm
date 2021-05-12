import PageControlActionTypes from './page-controls-action-types'

const INITIAL_STATE = {
    popupComponent: null,
    pupupLink: '/',
    popupOpen: false,
    drawerOpen : false
}

const pageControlReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case PageControlActionTypes.TOGGLE_POPUP_FALSE:
            return {...state, popupOpen: false};

        case PageControlActionTypes.TOGGLE_POPUP_TRUE:
            return {...state, popupOpen: true};

        case PageControlActionTypes.TOGGLE_POPUP:
            return {...state, popupOpen: !state.popupOpen};

        case PageControlActionTypes.TOGGLE_DRAWER_FALSE:
            return {...state, drawerOpen: false};

        case PageControlActionTypes.TOGGLE_DRAWER_TRUE:
            return {...state, drawerOpen: true};

        case PageControlActionTypes.TOGGLE_DRAWER:
            return {...state, drawerOpen: !state.drawerOpen};

        default:
            return state;
    }
}

export default pageControlReducer;