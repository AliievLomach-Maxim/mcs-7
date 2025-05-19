const initialState = { value: 0, value2: 0 }

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        value: state.value + action.payload,
      }
    case 'decrement':
      return {
        ...state,
        value: state.value - action.payload,
      }
    default:
      return state
  }
}

export const incrementAction = (value) => {
  return { payload: value, type: 'increment' }
}

export const decrementAction = (value) => {
  return { payload: value, type: 'decrement' }
}
