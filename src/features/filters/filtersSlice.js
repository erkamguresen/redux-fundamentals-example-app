import { initialState } from '../../init'

//only relevant state which is filter inthis case
export default function filtersReducer(state = initialState.filters, action) {
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      return {
        // Copy the whole state
        ...state,

        // And replace the status field with the new value
        status: action.payload,
      }
    }

    default:
      return state
  }
}
