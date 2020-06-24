import { combineReducers } from 'redux'

import { tradesReducer } from './trades/tradesReducer'
import { liveUpdateReducer } from './liveData/liveUpdateReducer'
import { toggleViewReducer } from './toggleView/toggleViewReducer'

export const rootReducer = combineReducers({
    tradesStore: tradesReducer,
    liveData: liveUpdateReducer,
    toggledView: toggleViewReducer,
})

export type RootState = ReturnType<typeof rootReducer>
