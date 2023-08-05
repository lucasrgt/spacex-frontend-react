import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Result } from '../../../../../domain/models'
import { useFetch } from '../../../../hooks/use-fetch.ts'

/** Fetch launch results (successes and failures) from backend */
export const fetchResults = createAsyncThunk<Result, void>(
  'fetchResults',
  async () => {
    const response = await useFetch({ route: '/results' })
    console.log('Data:', response.data)
    return response.data
  }
)

interface ResultsState {
  isLoading: boolean
  isError: boolean
  data: Result | null
}

const initialState: ResultsState = {
  isLoading: false,
  isError: false,
  data: null
}

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchResults.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      fetchResults.fulfilled,
      (state, action: PayloadAction<Result>) => {
        state.isLoading = false
        state.data = action.payload
      }
    )
    builder.addCase(fetchResults.rejected, (state, action) => {
      console.log('Error:', action.error)
      state.isError = true
    })
  }
})

export default resultsSlice.reducer
