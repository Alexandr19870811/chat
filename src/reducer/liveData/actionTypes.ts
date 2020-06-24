export const LIVE_CURRENCY_UPDATE = 'LIVE_CURRENCY_UPDATE';

export interface LiveCurrencyUpdate {
    type: typeof LIVE_CURRENCY_UPDATE,
    payload: {
        time: string
        rate: string
        currency: string
        rateFloat: number
        description: string
    }
}

export type Actions =
    | LiveCurrencyUpdate
