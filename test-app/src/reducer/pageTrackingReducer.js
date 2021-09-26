import { pageInitialState } from './initialState'
import * as types from '../actions/ActionTypes'

const pageTrackingReducer = (state = pageInitialState, action) => {
  switch (action.type) {
    case (types.UPDATE_CURRENT_PAGE):
      return {
        ...state,
        page: {
          ...state.page,
          currentPage: action.payload.currentPage
        }
      }
    default:
      return state
  }
}

export default pageTrackingReducer