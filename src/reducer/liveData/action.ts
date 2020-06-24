import {LIVE_CURRENCY_UPDATE, LiveCurrencyUpdate} from "./actionTypes";

export const startCurrencyLiveUpdate = (
    time: string,
    rate: string,
    currency: string,
    rateFloat: number,
    description: string): LiveCurrencyUpdate => {
    return {
        type: LIVE_CURRENCY_UPDATE,
        payload: {
            time,
            rate,
            currency,
            rateFloat,
            description,
        }
    }
}
