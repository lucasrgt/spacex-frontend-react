import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ChartData } from '../../../../../domain/models'
import { useFetch } from '../../../../hooks/use-fetch.ts'

/** Fetch launch chart data from backend */
export const fetchChartData = createAsyncThunk<ChartData[], void>(
  'fetchChartData',
  async () => {
    const response = await useFetch({ route: '/launches/stats' })
    console.log(response.data)
    return response.data
  }
)

interface ChartDataState {
  isLoading: boolean
  isError: boolean
  data: ChartData[] | null
}

const initialState: ChartDataState = {
  isLoading: false,
  isError: false,
  data: null
}

const chartDataSlice = createSlice({
  name: 'chartData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChartData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      fetchChartData.fulfilled,
      (state, action: PayloadAction<ChartData[]>) => {
        state.isLoading = false
        state.data = action.payload
      }
    )
    builder.addCase(fetchChartData.rejected, (state, action) => {
      state.isError = true
    })
  }
})

export default chartDataSlice.reducer
