import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
  current: 'en',
}
export const langAction = createAction('lang')

export const langReducer = createReducer(initialState, (builder) => {
  builder.addCase(langAction, (state, { payload }) => {
    return {
      ...state,
      current: payload,
    }
  })
})

// export const langReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'lang':
//       return {
//         ...state,
//         current: action.payload,
//       }
//     default:
//       return state
//   }
// }

// export const langAction = (value) => {
//   return { payload: value, type: 'lang' }
// }
