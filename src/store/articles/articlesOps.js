import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://64689aefe99f0ba0a8286f54.mockapi.io/v2'

// error.response.data!!!!!!
// export const getArticlesThunk = createAsyncThunk(
//   'articles/get-all',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios('articles')
//       return data
//     } catch (error) {
//       return rejectWithValue(error.response.data)
//     }
//   }
// )

export const getArticlesThunk = createAsyncThunk('articles/get-all', async () => {
  const { data } = await axios('articles')
  return data
})

export const createArticleThunk = createAsyncThunk('articles/create', async (props) => {
  const { data } = await axios.post('articles', props)
  return data
})
