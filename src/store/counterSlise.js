import { createSlice } from '@reduxjs/toolkit'
const initialState = { value: 0, value2: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.value += payload
    },
    // return {
    //   ...state,
    //   value: state.value + payload,
    // }
    decrement: (state, { payload }) => {
      state.value -= payload
      // return {...state,users:[...state.users,payload]}
      // return {
      //   ...state,
      //   value: state.value - payload,
      // }
    },
  },
})

export const counterReducer = counterSlice.reducer
export const { increment, decrement } = counterSlice.actions

// const initialState = { value: 0, value2: 0 }

// export const counterReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(incrementAction, (state, { payload }) => {
//       return {
//         ...state,
//         value: state.value + payload,
//       }
//     })
//     .addCase(decrementAction, (state, { payload }) => {
//       return {
//         ...state,
//         value: state.value - payload,
//       }
//     })
// })

// export const incrementAction = createAction('increment')
// export const decrementAction = createAction('decrement')

// export const incrementAction = (value) => {
//   return { payload: value, type: 'increment' }
// }

// export const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case incrementAction.type:
//       return {
//         ...state,
//         value: state.value + action.payload,
//       }
//     case decrementAction.type:
//       return {
//         ...state,
//         value: state.value - action.payload,
//       }
//     default:
//       return state
//   }
// }

// export const decrementAction = (value) => {
//   return { payload: value, type: 'decrement ' }
// }
// console.log('decrementAction', decrementAction.toString())
