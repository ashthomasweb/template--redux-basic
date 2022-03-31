// root-reducer.js

import { combineReducers } from 'redux'

// slice reducer for user data
import userReducer from './user/user.reducer'
import displayReducer from './display/display.reducer'


// imported to store, assigned as the rootReducer object
// remember that each slice of state lives in the slice reducer tree
export default combineReducers({
    user: userReducer,
    display: displayReducer
})

// END of document
