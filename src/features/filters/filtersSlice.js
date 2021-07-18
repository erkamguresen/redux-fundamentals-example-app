import { initialState } from '../../init'

//only relevant state which is filter inthis case
export default function filtersReducer(state = initialState.filters, action) {
  console.log(state)

  switch (action.type) {
    case 'filters/statusFilterChanged': {
      return {
        // Copy the whole state
        ...state,

        // And replace the status field with the new value
        status: action.payload,
      }
    }
    case 'filters/colorFilterChanged': {
      // console.log([...state.colors].push(6))
      switch (action.payload.changeType) {
        case 'added':
          return {
            // Copy the whole state
            ...state,

            // And replace the status field with the new value
            colors: state.colors.concat([action.payload.color]),
          }

        case 'removed':
          return {
            // Copy the whole state
            ...state,

            // And replace the status field with the new value
            colors: state.colors.filter((color) => {
              return color !== action.payload.color
            }),
          }

        default:
          break
      }
    }

    default:
      return state
  }
}
