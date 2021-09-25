import { initialState } from './initialState'
import * as types from '../actions/ActionTypes'

const loginStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case (types.SET_TOKEN):
      return {
        ...state,
        user: {
          ...state.user,
          token: action.payload.token
        }
      }
    default:
      return state
  }
}

export default loginStatusReducer