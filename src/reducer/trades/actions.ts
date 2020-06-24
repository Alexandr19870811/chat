import {
    DELETE_CHAT,
    DeleteChat,
    MARK_TRADE_READ,
    MARK_TRADE_UNREAD,
    MarkTradeRead,
    MarkTradeUnread,
    SEND_MESSAGE,
    SendMessage,
    SET_TRADES,
    SetTrades,
    TOGGLE_USER,
    ToggleUser
} from './actionTypes';
import {UserType, TradeStore} from "./Model";

export function toggleUser(user: UserType): ToggleUser {
    return {
        type: TOGGLE_USER,
        user
    }
}

export function deleteTrade(chatId: number): DeleteChat {
    return {
        type: DELETE_CHAT,
        chatId
    }
}

export function sendMessage(message: string, tradeId: number, user: UserType): SendMessage {
    return {
        type: SEND_MESSAGE,
        user,
        tradeId,
        message
    }
}

export function markTradeRead(tradeId: number): MarkTradeRead {
    return {
        type: MARK_TRADE_READ,
        tradeId
    }
}

export function markTradeUnread(tradeId: number): MarkTradeUnread {
    return {
        type: MARK_TRADE_UNREAD,
        tradeId
    }
}

export function setTrades(trades: TradeStore): SetTrades {
    return {
        type: SET_TRADES,
        trades
    }
}