import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { searchValue: '' },
  reducers: {
    changeSearchValue: (state, { payload }) => {
      state.searchValue = payload
    },
  },
})

export const filtersReducer = filtersSlice.reducer
export const { changeSearchValue } = filtersSlice.actions

export const selectSearchValue = (state) => state.filters.searchValue
