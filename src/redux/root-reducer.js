import {combineReducers} from 'redux'

import userReducer from './user/user-reducer'
import pageControlReducer from './controls/page-controls/page-controls-reducer'

const rootReducer = combineReducers({
    user: userReducer,
    controls: pageControlReducer
})

export default rootReducer;