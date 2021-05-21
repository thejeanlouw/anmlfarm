import { createSelector } from "reselect";
import { selectCurrentCamp } from "../camps/camps.selectors";

export const animalSelector = state => state.animals;

export const farmAnimalsSelector = createSelector(
    [animalSelector],
    animalDetails => animalDetails.farmAnimals
)

export const selectCurrentSelectedAnimal = createSelector(
    [farmAnimalsSelector, animalSelector],
    (animals, animalDetails) => animals[animalDetails.selectedAnimalId]
)

export const selectAllAnimalsAsArray = createSelector(
    [farmAnimalsSelector],
    animals => Object.keys(animals)
        .map( key => animals[key])
)

export const selectCurrentCampAnimals = createSelector(
    [selectAllAnimalsAsArray, selectCurrentCamp],
    (animals, camp) => animals.filter(animal => animal.campId == camp?.campId)
)

export const selectCurrentCampAnimalsAsArray = createSelector(
    [selectCurrentCampAnimals],
    animals => Object.keys(animals)
        .map( key => animals[key])
)

// export const selectAnimalFilter = createSelector(
//     [animalSelector],
//     animals => animals.animalFilters
// )

// export const selectFilteredAnimals = createSelector(
//     [selectAnimalFilter, selectAllAnimalsAsArray],
//     (animalFilter, animalArray) => {
//         if(animalFilter.campId)
//            return animalArray.filter(animal=>animal.campId == animalFilter.campId)
//     }
// )