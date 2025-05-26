import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { counterReducer } from './counterSlise'
import { langReducer } from './langSlice'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoSlice'
import { articlesReducer } from './articles/articlesSlice'

const todoConfig = {
  key: 'todo',
  storage,
}
const langConfig = {
  key: 'lang',
  storage,
}

const persistedTodoReducer = persistReducer(todoConfig, todoReducer)
const persistedLangReducer = persistReducer(langConfig, langReducer)

const rootReducer = {
  counter: counterReducer,
  lang: persistedLangReducer,
  todo: persistedTodoReducer,
  articles: articlesReducer,
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
