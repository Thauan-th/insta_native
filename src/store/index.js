import {combineReducers } from 'redux'
import userReducer from './reducers/user'
const ReducersReducers = combineReducers({
  user:userReducer
})

export default ReducersReducers