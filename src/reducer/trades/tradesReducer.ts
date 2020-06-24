import {Trade, TradeStore} from "./Model";
import parseDate from "src/utils/parseDate";
import {SELLER, BUYER} from "src/config/constants";
import {
    DELETE_CHAT,
    MARK_TRADE_READ,
    MARK_TRADE_UNREAD,
    SEND_MESSAGE,
    TOGGLE_USER,
    TradeActionTypes
} from "./actionTypes";
import {initial} from "./initial";

export function tradesReducer(state = initial, action: TradeActionTypes): TradeStore {
    switch (action.type) {
        case TOGGLE_USER:
            return {
                ...state,
                currentUser: state.currentUser === SELLER ? BUYER : SELLER
            };
        case "SET_TRADES":
            return action.trades;
        case DELETE_CHAT:
            return {
                ...state,
                [state.currentUser]: {
                    ...state[state.currentUser],
                    trades: state[state.currentUser].trades
                        .filter(trade => trade.id !== action.chatId)
                }
            }
        case SEND_MESSAGE:
            const extractTrade = (trades: Trade[]) => trades.find(trade => trade.id === action.tradeId)

            // IF TRADE IS REMOVED FROM SELLER, THEN A NEW COPY OF BUYER`s TRADE
            // IS CREATED WITH A NEW MESSAGE IN CHAT
            // AND IS ADDED TO THE SELLER TRADES ARRAY
            if(state.currentUser === BUYER) {
                const sellerTrade = extractTrade(state.seller.trades)

                if(!sellerTrade) {
                    const copyTrade = extractTrade(state.buyer.trades)

                    if(copyTrade) {
                        return {
                            ...state,
                            seller: {
                                ...state.seller,
                                trades: [...state.seller.trades, {
                                    ...copyTrade,
                                    unReadMessages: true,
                                    chat: [{
                                        time: parseDate(new Date()),
                                        status: action.user,
                                        message: action.message
                                    }]
                                }]
                            },
                            buyer: {
                                ...state.buyer,
                                trades: state.buyer.trades.map(trade => {
                                    if (trade.id === action.tradeId) {
                                        return ({
                                            ...trade,
                                            chat: [
                                                ...trade.chat,
                                                {
                                                    time: parseDate(new Date()),
                                                    status: action.user,
                                                    message: action.message
                                                }
                                            ]
                                        })
                                    }
                                    return trade
                                })
                            }
                        }
                    }
                }
            }

            // IF TRADE IS REMOVED FROM BUYER, THEN A NEW COPY OF SELLER`s TRADE
            // IS CREATED WITH A NEW MESSAGE IN CHAT
            // AND IS ADDED TO THE BUYER`s TRADES ARRAY
            if(state.currentUser === SELLER) {
                const buyerTrade = extractTrade(state.buyer.trades)

                if(!buyerTrade) {
                    const copyTrade = extractTrade(state.seller.trades)

                    if(copyTrade) {
                        return {
                            ...state,
                            buyer: {
                                ...state.buyer,
                                trades: [...state.buyer.trades, {
                                    ...copyTrade,
                                    unReadMessages: true,
                                    chat: [{
                                        time: parseDate(new Date()),
                                        status: action.user,
                                        message: action.message
                                    }]
                                }]
                            },
                            seller: {
                                ...state.seller,
                                trades: state.seller.trades.map(trade => {
                                    if (trade.id === action.tradeId) {
                                        return ({
                                            ...trade,
                                            chat: [
                                                ...trade.chat,
                                                {
                                                    time: parseDate(new Date()),
                                                    status: action.user,
                                                    message: action.message
                                                }
                                            ]
                                        })
                                    }
                                    return trade
                                })
                            }
                        }
                    }
                }
            }

            // IF TRADE IS NOT REMOVED FOR BOTH USERS, THEN JUST ADD A NEW MESSAGE TO THE TRADE CHAT
            return {
                ...state,
                seller: {
                    ...state.seller,
                    trades: state.seller.trades.map(trade => {
                        if (trade.id === action.tradeId) {
                            return ({
                                ...trade,
                                chat: [
                                    ...trade.chat,
                                    {
                                        time: parseDate(new Date()),
                                        status: action.user,
                                        message: action.message
                                    }
                                ]
                            })
                        }
                        return trade
                    })
                },
                buyer: {
                    ...state.buyer,
                    trades: state.buyer.trades.map(trade => {
                        if (trade.id === action.tradeId) {
                            return ({
                                ...trade,
                                chat: [
                                    ...trade.chat,
                                    {
                                        time: parseDate(new Date()),
                                        status: action.user,
                                        message: action.message
                                    }
                                ]
                            })
                        }
                        return trade
                    })
                }
            }

        case MARK_TRADE_READ:
            return {
                ...state,
                [state.currentUser]: {
                    ...state[state.currentUser],
                    trades: state[state.currentUser].trades.map(trade => {
                        if(trade.id === action.tradeId) {
                            return {
                                ...trade,
                                unReadMessages: false
                            }
                        }
                        return trade
                    })
                }
            }
        case MARK_TRADE_UNREAD:
            const currentUser = state.currentUser === BUYER ? SELLER : BUYER

            return {
                ...state,
                [currentUser]: {
                    ...state[currentUser],
                    trades: state[currentUser].trades.map(trade => {
                        if(trade.id === action.tradeId) {
                            return {
                                ...trade,
                                unReadMessages: true
                            }
                        }
                        return trade
                    })
                }
            }
        default:
            return state
    }
}