import { createSlice } from '@reduxjs/toolkit'
import { createArticleThunk, getArticlesThunk } from './articlesOps'

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getArticlesThunk.fulfilled, (state, { payload }) => {
        state.data = payload
        state.isLoading = false
      })
      // .addCase(getArticlesThunk.rejected, (state, { error }) => {
      //   state.isError = error.message
      //   state.isLoading = false
      // })
      // .addCase(getArticlesThunk.rejected, (state, { payload }) => {
      //   state.isError = payload
      //   state.isLoading = false
      // })
      .addCase(getArticlesThunk.rejected, (state) => {
        state.isError = true
        state.isLoading = false
      })
      .addCase(createArticleThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createArticleThunk.fulfilled, (state, { payload }) => {
        state.data.push(payload)
        state.isLoading = false
      })
      .addCase(createArticleThunk.rejected, (state) => {
        state.isError = true
        state.isLoading = false
      })
  },
})

export const articlesReducer = articlesSlice.reducer
