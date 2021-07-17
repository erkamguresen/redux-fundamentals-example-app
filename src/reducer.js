import initialState from './init'

//use initial state as a default value for the state parameter
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field
  //to decide what happens
  switch (action.type) {
    // Do something here based on the different action types
    default:
      // If this reducer doesn't recognize the action type, or doesn't care
      // about this specific action, return the existing state unchanged
      return state
  }
}
