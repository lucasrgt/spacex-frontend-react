import { configureStore } from '@reduxjs/toolkit'
// import launchChartDataReducer from '../slice/chart-data-slice'
// import launchReducer from '../slice/launch-slice'
// import launchResultsReducer from '../slice/results-slice'

export const store = configureStore({
    reducer: {
        // launchReducer,
        // launchChartDataReducer,
        // launchResultsReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
