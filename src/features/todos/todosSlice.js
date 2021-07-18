import { initialState } from '../../init'

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

/**
 *
 * @param {object} state - only the relavent part of the state, which is
 * the todos array in this case
 *
 * @param {*} action
 * @returns
 */
export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return [
        //with all of the old todos
        ...state,
        //and the new todo object
        {
          // use an auto-incrementing numeric ID for this exampleAddons
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ]
    }
    case 'todos/todoToggled': {
      return [
        // Again copy the entire state object
        ...state,

        // This time, we need to make a copy of the old todos array
        state.map((todo) => {
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
      ]
    }
    default:
      return state
  }
}
