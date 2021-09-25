import * as types from './ActionTypes'

export const setToken = (token) => {
  return {
    type: types.SET_TOKEN,
    payload: {
      token
    }
  }
}