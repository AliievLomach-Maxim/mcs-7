import { createSlice } from '@reduxjs/toolkit'

const customRootSlice = createSlice({
  name: 'root',
  initialState: {
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => {
          if (action.type.endsWith('/pending')) return true
          else return false
        },
        (state) => {
          state.isLoading = true
          state.isError = false
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        (state) => {
          state.isError = true
          state.isLoading = false
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/fulfilled'),
        (state) => {
          state.isLoading = false
        }
      )
  },
})

export const customRootReducer = customRootSlice.reducer
