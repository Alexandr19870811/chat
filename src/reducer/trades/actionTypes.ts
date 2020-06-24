import {TradeStore, UserType} from "./Model";

export const TOGGLE_USER = 'TOGGLE_USER'
export const DELETE_CHAT = 'DELETE_CHAT'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const MARK_TRADE_READ = 'MARK_TRADE_READ'
export const MARK_TRADE_UNREAD = 'MARK_TRADE_UNREAD'
export const SET_TRADES = 'SET_TRADES'

export interface ToggleUser {
    type: typeof TOGGLE_USER,
    user: UserType
}

export interface SetTrades {
    type: typeof SET_TRADES,
    trades: TradeStore
}

export interface DeleteChat {
    type: typeof DELETE_CHAT,
    chatId: number
}

export interface SendMessage {
    type: typeof SEND_MESSAGE,
    user: UserType
    tradeId: number
    message: string
}

export interface MarkTradeRead {
    type: typeof MARK_TRADE_READ
    tradeId: number
}

export interface MarkTradeUnread {
    type: typeof MARK_TRADE_UNREAD
    tradeId: number
}

export type TradeActionTypes =
    | SetTrades
    | ToggleUser
    | DeleteChat
    | SendMessage
    | MarkTradeRead
    | MarkTradeUnread