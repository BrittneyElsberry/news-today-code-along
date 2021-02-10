import {createStore, applyMiddleware, combineReducers} from 'redux'
import promiseMiddleWare from 'redux-promise-middleware'
import hackerNewsReducer from './hackerNewsReducer'
import mediumReducer from './mediumReducer'


const rootReducer = combineReducers({
    hackerNews: hackerNewsReducer,
    medium: mediumReducer
}) //state is now an object

export default createStore(rootReducer, applyMiddleware(promiseMiddleWare))