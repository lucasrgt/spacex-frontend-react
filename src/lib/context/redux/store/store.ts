import { configureStore } from '@reduxjs/toolkit'
// import launchChartDataReducer from '../slice/chart-data-slice'
// import launchReducer from '../slice/launch-slice'
import resultsReducer from '../slices/launch/results-slice.ts'

export const store = configureStore({
  reducer: {
    resultsReducer
    // chartDataReducer,
    // paginatedLaunchesReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
