import { combineReducers } from 'redux'
import loginStatusReducer from './loginStatusReducer.js'
import pageTrackingReducer from './pageTrackingReducer.js'

const rootReducer  = combineReducers({
  loginStatusReducer,
  pageTrackingReducer
})

export default rootReducer