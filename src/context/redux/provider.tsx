import { Provider } from 'react-redux'
import { store } from './store/store'
import React from "react";

interface ProvidersProps {
    children: React.ReactNode
}

export function StateProvider({ children }: ProvidersProps) {
    return <Provider store={store}>{children}</Provider>
}
