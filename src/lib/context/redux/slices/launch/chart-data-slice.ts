import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Result } from '../../../../../domain/models'
import { useFetch } from '../../../../hooks/use-fetch.ts'

/** Fetch launch chart data from backend */
export const fetchChartData = createAsyncThunk<Result, void>(
  'fetchChartData',
  async () => {
    const response = await useFetch({ route: '/results' })
    console.log('Data:', response.data)
    return response.data
  }
)

interface ChartDataState {
  isLoading: boolean
  isError: boolean
  data: Result | null
}

const initialState: ChartDataState = {
  isLoading: false,
  isError: false,
  data: null
}

const chartDataSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChartData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      fetchChartData.fulfilled,
      (state, action: PayloadAction<Result>) => {
        state.isLoading = false
        state.data = action.payload
      }
    )
    builder.addCase(fetchChartData.rejected, (state, action) => {
      console.log('Error:', action.error)
      state.isError = true
    })
  }
})

export default chartDataSlice.reducer
