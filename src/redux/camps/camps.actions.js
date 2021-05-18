import campActionTypes from "./camps.action-types";

export const setSelectedCamp = (campId) => ({
    type: campActionTypes.SELECT_CAMP,
    payload: campId
})