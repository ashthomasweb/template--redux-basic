// store.js

// import { createStore, applyMiddleware } from 'redux'
import { createStore } from 'redux'

// import logger from 'redux-logger'

// assign exported return of combineReducer()
import rootReducer from './root-reducer'

// const middlewares = [logger]

// const store = createStore(rootReducer, applyMiddleware(...middlewares))
const store = createStore(rootReducer)

export default store

// END of document

