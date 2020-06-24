import {Action} from "./actionTypes"
import { View } from './actionTypes'

type ViewModel = View
export function toggleViewReducer(state = null, action: Action): ViewModel {
    switch (action.type) {
        case "TOGGLE_VIEW":
            return action.view
        default:
            return state
    }
}