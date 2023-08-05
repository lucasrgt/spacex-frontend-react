import { configureStore } from '@reduxjs/toolkit'
import paginatedLaunchesReducer from '../slices/launch/paginated-launches-slice.ts'
import chartDataReducer from '../slices/launch/chart-data-slice.ts'
import resultsReducer from '../slices/launch/results-slice.ts'

export const store = configureStore({
  reducer: {
    resultsReducer,
    chartDataReducer,
    paginatedLaunchesReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
