import { createSelector } from "reselect";

export const selectFarmCollection = state => state.farms;

export const selectConnectedFarms = createSelector(
    [selectFarmCollection],
    farmDetails => farmDetails.connectedFarms
)

export const selectCurrentFarm = createSelector(
    [selectFarmCollection],
    farmDetails => farmDetails.connectedFarms[farmDetails.selectedFarm]
)