import { createSlice } from '@reduxjs/toolkit'
import defaultTodo from '../../data.json'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: defaultTodo,
    secretKey: 'qwrety',
  },
  reducers: {
    createTodo: (state, { payload }) => {
      state.todos.unshift(payload)
    },
    updateTodo: (state, { payload }) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, title: payload.title }
        }
        return todo
      })
    },
    changeTodoStatus: (state, { payload }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      )
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload)
    },
  },
})

export const todoReducer = todoSlice.reducer
export const { changeTodoStatus, createTodo, deleteTodo, updateTodo } = todoSlice.actions
