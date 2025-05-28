import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

axios.defaults.baseURL = 'https://64689aefe99f0ba0a8286f54.mockapi.io/'

const getPostsApi = async () => {
  const { data } = await axios('/posts')
  return data
}

export const getAllPostsThunk = createAsyncThunk('getAll/posts', () => getPostsApi())

const postSlice = createSlice({
  name: 'post',
  initialState: {
    // isLoading: false,
    // isError: false,
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPostsThunk.fulfilled, (state, { payload }) => {
      state.data = payload
    })
    // .addMatcher(
    //   (action) => {
    //     // if (action.type.endsWith('posts/pending')) return true
    //     if (action.type.endsWith('/pending')) return true
    //     else return false
    //   },
    //   (state) => {
    //     state.isLoading = true
    //     state.isError = false
    //   }
    // )
    // .addMatcher(
    //   ({ type }) => type.endsWith('/rejected'),
    //   (state) => {
    //     state.isError = true
    //     state.isLoading = false
    //   }
    // )
    // .addMatcher(
    //   ({ type }) => type.endsWith('/fulfilled'),
    //   (state) => {
    //     state.isLoading = false
    //   }
    // )
  },
})

export const postReducer = postSlice.reducer

export const selectPosts = (state) => state.posts.data
