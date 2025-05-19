const initialState = {
  current: 'en',
}

export const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'lang':
      return {
        ...state,
        current: action.payload,
      }
    default:
      return state
  }
}

export const langAction = (value) => {
  return { payload: value, type: 'lang' }
}
