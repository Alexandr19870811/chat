export const TOGGLE_VIEW = 'TOGGLE_VIEW'

export type View = 'trade_info' | 'trades_list' | null

export interface ToggleView {
    type: typeof TOGGLE_VIEW,
    view: View
}

export type Action = ToggleView