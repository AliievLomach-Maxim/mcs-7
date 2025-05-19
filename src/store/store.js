import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counterSlise'
import { langReducer } from './langSlice'

// const initialState = {
//   counter: { value: 0, value2: 0 },
//   lang: {
//     current: 'en',
//   },
// }

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + action.payload,
//         },
//       }
//     case 'decrement':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value - action.payload,
//         },
//       }
//     case 'lang':
//       return {
//         ...state,
//         lang: {
//           ...state.lang,
//           current: action.payload,
//         },
//       }
//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({
  counter: counterReducer,
  lang: langReducer,
})

export const store = createStore(rootReducer)
