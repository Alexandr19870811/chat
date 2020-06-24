import {initial} from "./initial";
import {LiveUpdate } from "./Models";
import { Actions } from "./actionTypes";
import { LIVE_CURRENCY_UPDATE } from "./actionTypes";

export function liveUpdateReducer(state = initial, action: Actions): LiveUpdate {
    switch (action.type) {
        case LIVE_CURRENCY_UPDATE:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}
