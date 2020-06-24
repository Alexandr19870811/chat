import {TOGGLE_VIEW, ToggleView} from "./actionTypes";

export function toggleView(view: "trade_info" | 'trades_list' | null): ToggleView {
    return {
        type: TOGGLE_VIEW,
        view: view
    }
}