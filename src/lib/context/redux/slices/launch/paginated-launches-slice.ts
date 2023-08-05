import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { PaginatedLaunches } from '../../../../../domain/models'
import { useFetch } from '../../../../hooks/use-fetch.ts'

type PaginatedLaunchesParams = {
  page?: number
  search?: string
  limit?: number
}

/** Fetch launches from backend */
export const fetchPaginatedLaunches = createAsyncThunk<
  PaginatedLaunches,
  PaginatedLaunchesParams,
  { rejectValue: { message: string } }
>(
  'fetchPaginatedLaunches',
  async (
    { page = 1, search = '' }: PaginatedLaunchesParams,
    { rejectWithValue }
  ) => {
    try {
      const response = await useFetch({
        route: '/launches',
        params: { page: page, search: search }
      })
      console.log('Data:', response.data)
      return response.data
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        typeof error.response.data === 'object' &&
        error.response.data.message
      ) {
        return rejectWithValue({ message: error.response.data.message })
      } else {
        return rejectWithValue({ message: error.message })
      }
    }
  }
)

interface PaginatedLaunchesState {
  isLoading: boolean
  isError: boolean
  error: string | null
  data: PaginatedLaunches | null
}

const initialState: PaginatedLaunchesState = {
  isLoading: false,
  isError: false,
  error: null,
  data: null
}

const paginatedLaunchesSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPaginatedLaunches.pending, (state) => {
      state.isLoading = true
      state.isError = false
      state.error = null
    })
    builder.addCase(
      fetchPaginatedLaunches.fulfilled,
      (state, action: PayloadAction<PaginatedLaunches>) => {
        state.isLoading = false
        state.data = action.payload
      }
    )
    builder.addCase(fetchPaginatedLaunches.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.error = action.payload?.message || 'Request failed'
    })
  }
})

export default paginatedLaunchesSlice.reducer
