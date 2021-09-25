import * as types from './ActionTypes'

export const login = (token) => {
  return {
    type: types.LOG_IN,
    payload: {
      token
    }
  }
}

export const logout = () => {
  return {
    type: types.LOG_OUT
  }
}