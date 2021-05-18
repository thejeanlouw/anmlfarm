import { createSelector } from "reselect"
import { selectCurrentFarm } from "../farm-details/farm-details.selectors"

export const selectCamps = state => state.camps;

export const selectSelectedCamp = createSelector(
    [selectCamps],
    campDetais => campDetais.connectedCamps[campDetais.selectedCampId]
)

export const selectConnectedCamps = createSelector(
    [selectCamps],
    camps => camps.connectedCamps
)

export const selectConnectedCampsArray = createSelector(
    [selectConnectedCamps],
    camps => Object.keys(camps)
        .map( key => camps[key])
)

export const selectCurrentFarmCamps = createSelector(
    [selectCurrentFarm, selectConnectedCampsArray],
    (farm, camps) => 
    camps.filter(c=>c.farmId==farm.id)
)

// export const selectCurrentSelectedCamp = createSelector(
//     [selectCurrentFarm, selectCamps],
//     (farm, camps) => camps.find(c=>c.farmId==farm.id)
// )

export const selectCampById = campId =>
createSelector(
    [selectConnectedCamps],
    camps => (camps ? camps[campId] : null)
)

