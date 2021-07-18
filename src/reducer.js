import { initialState } from './init'
import { combineReducers } from 'redux'
import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  //define a top-level state field named 'todos' handled by 'todosReducer'
  todos: todosReducer,
  filters: filtersReducer,
})

// function rootReducer(state = initialState, action) {
//   return {
//     todos: todosReducer((state = state.todos), action),
//     filters: filtersReducer((state = state.filters), action),
//   }
// }

export default rootReducer
//use initial state as a default value for the state parameter

function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field
  //to decide what happens
  switch (action.type) {
    // Do something here based on the different action types

    /* TODO cases if written here

    case 'todos/todoAdded':
      // We need to return the new state object
      return {
        // that has all the existing state data
        ...state,

        // but has a new array for the 'todos' fieldset
        todos: [
          //with all of the old todos
          ...state.todos,

          //and the new todo object
          {
            // use an auto-incrementing numeric ID for this exampleAddons
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      }

    case 'todos/todoToggled': {
      return {
        // Again copy the entire state object
        ...state,

        // This time, we need to make a copy of the old todos array
        todos: state.todos.map((todo) => {
          // If this isn't the todo item we're looking for, leave it alone
          if (todo.id !== action.payload) {
            return todo
          }

          // We've found the todo that has to change. Return a copy:
          return {
            ...todo,
            // Flip the completed flag
            completed: !todo.completed,
          }
        }),
      }
    }
    */

    case 'filters/statusFilterChanged': {
      return {
        // Copy the whole state
        ...state,

        // Overwrite the filters value
        filters: {
          // copy the other filter fields
          ...state.filters,

          // And replace the status field with the new value
          status: action.payload,
        },
      }
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't care
      // about this specific action, return the existing state unchanged
      return state
  }
}
