import { userInitialState } from './initialState'
import * as types from '../actions/ActionTypes'

const loginStatusReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case (types.LOG_IN):
      return {
        ...state,
        user: {
          ...state.user,
          token: action.payload.token,
          login: true
        }
      }
    case (types.LOG_OUT):
      return {
        ...state,
        user: {
          ...state.user,
          token: "",
          login: false
        }
      }
    default:
      return state
  }
}

export default loginStatusReducer