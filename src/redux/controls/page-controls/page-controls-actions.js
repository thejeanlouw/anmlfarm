import PageControlActionTypes from './page-controls-action-types'

export const togglePopupFalse = () => ({
    type: PageControlActionTypes.TOGGLE_POPUP_FALSE
})

export const togglePopupTrue = () => ({
    type: PageControlActionTypes.TOGGLE_POPUP_TRUE
})

export const togglePopup = () => ({
    type: PageControlActionTypes.TOGGLE_POPUP
})

export const toggleDrawer = () => ({
    type: PageControlActionTypes.TOGGLE_DRAWER
})

export const toggleDrawerFalse = () => ({
    type: PageControlActionTypes.TOGGLE_DRAWER_FALSE
})

export const toggleDrawerTrue = () => ({
    type: PageControlActionTypes.TOGGLE_DRAWER_TRUE
})

export const setPopupLink = (linkUrl) => ({
    type: PageControlActionTypes.SET_POPUP_LINK,
    payload: linkUrl
})

export const setPopupComponent = (component) => ({
    type: PageControlActionTypes.SET_POPUP_COMPONENT,
    payload: component
})