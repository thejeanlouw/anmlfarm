import {combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user-reducer'
import farmDetailsReducer from './farm-details/farm-details.reducer'
import campReducer from './camps/camps.reducer'
import animalDetailsReducer from './animal-details/animal-details.reducer'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'farms',
        'camps',
        'animals',
        'events'
    ]
}

const rootReducer = combineReducers({
    user: userReducer,
    farms: farmDetailsReducer,
    camps: campReducer,
    animals: animalDetailsReducer
})

export default persistReducer(persistConfig, rootReducer);