import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { PaginatedLaunches, Result } from '../../../../../domain/models'
import { useFetch } from '../../../../hooks/use-fetch.ts'

type PaginatedLaunchesParams = {
  page?: number
  search?: string
  limit?: number
}

/** Fetch launches from backend */
export const fetchPaginatedLaunches = createAsyncThunk<
  PaginatedLaunches,
  PaginatedLaunchesParams
>(
  'fetchPaginatedLaunches',
  async ({ page = 1, search = '' }: PaginatedLaunchesParams) => {
    const response = await useFetch({
      route: '/launches',
      params: { page: page, search: search }
    })
    console.log('Data:', response.data)
    return response.data
  }
)

interface PaginatedLaunchesState {
  isLoading: boolean
  isError: boolean
  data: PaginatedLaunches | null
}

const initialState: PaginatedLaunchesState = {
  isLoading: false,
  isError: false,
  data: null
}

const paginatedLaunchesSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPaginatedLaunches.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      fetchPaginatedLaunches.fulfilled,
      (state, action: PayloadAction<PaginatedLaunches>) => {
        state.isLoading = false
        state.data = action.payload
      }
    )
    builder.addCase(fetchPaginatedLaunches.rejected, (state, action) => {
      console.log('Error:', action.error)
      state.isError = true
    })
  }
})

export default paginatedLaunchesSlice.reducer
