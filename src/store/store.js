import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counterSlise'
import { langReducer } from './langSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoSlice'

const todoConfig = {
  key: 'todo',
  storage,
  // whitelist: ['todos'],
  // blacklist: ['secretKey'],
}
const langConfig = {
  key: 'lang',
  storage,
  // whitelist: ['todos'],
  // blacklist: ['secretKey'],
}

const persistedTodoReducer = persistReducer(todoConfig, todoReducer)
const persistedLangReducer = persistReducer(langConfig, langReducer)

const rootReducer = {
  counter: counterReducer,
  lang: persistedLangReducer,
  todo: persistedTodoReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})

export const persistor = persistStore(store)

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// // import { combineReducers, createStore } from 'redux'
// import { counterReducer } from './counterSlise'
// import { langReducer } from './langSlice'
// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import { todoReducer } from './todoSlice'

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   lang: langReducer,
//   todo: todoReducer,
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//   reducer: persistedReducer,
// })

// export const persistor = persistStore(store)

// // import { combineReducers, createStore } from 'redux'
// import { counterReducer } from './counterSlise'
// import { langReducer } from './langSlice'
// import { configureStore } from '@reduxjs/toolkit'
// import { todoReducer } from './todoSlice'

// // const rootReducer = combineReducers({
// //   counter: counterReducer,
// //   lang: langReducer,
// // })

// const rootReducer = {
//   counter: counterReducer,
//   lang: langReducer,
//   todo: todoReducer,
// }

// export const store = configureStore({
//   reducer: rootReducer,
// })
