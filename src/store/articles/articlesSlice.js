import { createSelector, createSlice } from '@reduxjs/toolkit'
import {
  createArticleThunk,
  getArticlesThunk,
  updateArticleThunk,
  removeArticleThunk,
} from './articlesOps'
import { selectSearchValue } from '../filters/filtersSlice'

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    data: [],
    // isLoading: false,
    // isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesThunk.fulfilled, (state, { payload }) => {
        state.data = payload
      })
      .addCase(createArticleThunk.fulfilled, (state, { payload }) => {
        state.data.push(payload)
      })
      .addCase(updateArticleThunk.fulfilled, (state, { payload }) => {
        state.data.push(payload)
      })
      .addCase(removeArticleThunk.fulfilled, (state, { payload }) => {
        state.data.push(payload)
      })
    // .addMatcher(
    //   (action) => {
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
// const articlesSlice = createSlice({
//   name: 'articles',
//   initialState: {
//     data: [],
//     isLoading: false,
//     isError: false,
//   },
//   extraReducers: (builder) => {
//     builder
//       // .addCase(getArticlesThunk.pending, (state) => {
//       //   state.isLoading = true
//       // })
//       .addCase(getArticlesThunk.fulfilled, (state, { payload }) => {
//         state.data = payload
//         // state.isLoading = false
//       })
//       // .addCase(getArticlesThunk.rejected, (state) => {
//       //   state.isError = true
//       //   state.isLoading = false
//       // })
//       // .addCase(createArticleThunk.pending, (state) => {
//       //   state.isLoading = true
//       // })
//       .addCase(createArticleThunk.fulfilled, (state, { payload }) => {
//         state.data.push(payload)
//         // state.isLoading = false
//       })
//       // .addCase(createArticleThunk.rejected, (state) => {
//       //   state.isError = true
//       //   state.isLoading = false
//       // })
//       // .addCase(updateArticleThunk.pending, (state) => {
//       //   state.isLoading = true
//       // })
//       .addCase(updateArticleThunk.fulfilled, (state, { payload }) => {
//         state.data.push(payload)
//         // state.isLoading = false
//       })
//       // .addCase(updateArticleThunk.rejected, (state) => {
//       //   state.isError = true
//       //   state.isLoading = false
//       // })
//       // .addCase(removeArticleThunk.pending, (state) => {
//       //   state.isLoading = true
//       // })
//       .addCase(removeArticleThunk.fulfilled, (state, { payload }) => {
//         state.data.push(payload)
//         // state.isLoading = false
//       })
//       // .addCase(removeArticleThunk.rejected, (state) => {
//       //   state.isError = true
//       //   state.isLoading = false
//       // })
//       .addMatcher(
//         ({ type }) => {
//           if (type.endsWith('/pending')) return true
//           else return false
//         },
//         (state) => {
//           state.isLoading = true
//           state.isError = false
//         }
//       )
//       .addMatcher(
//         ({ type }) => type.endsWith('/rejected'),
//         (state) => {
//           state.isError = true
//           state.isLoading = false
//         }
//       )
//       .addMatcher(
//         ({ type }) => type.endsWith('/fulfilled'),
//         (state) => {
//           state.isLoading = false
//         }
//       )
//   },
// })

export const articlesReducer = articlesSlice.reducer

export const selectArticles = (state) => {
  return state.articles
}

export const selectArticlesData = (state) => {
  return state.articles.data
}

export const selectNumSum = (state) => {
  return state.articles.number1 + state.articles.number2
}

export const selectNumOne = (state) => state.articles.number1
export const selectNumTwo = (state) => state.articles.number2

export const selectFilteredArticles = (state) => {
  console.log('selectFilteredArticles')

  const data = state.articles.data
  const searchValue = selectSearchValue(state)
  return data.filter((el) => el.name.includes(searchValue))
}

export const selectMemoFilteredArticles = createSelector(
  [selectArticlesData, selectSearchValue],
  (data, searchValue) => {
    console.log('selectMemoFilteredArticles')
    return data.filter((el) => el.name.includes(searchValue))
  }
)
