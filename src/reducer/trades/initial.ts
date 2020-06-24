import {TradeStore} from "./Model";

export const initial: TradeStore = {
    currentUser: 'buyer',
    seller: {
        name: '',
        trades: [{
            id: 0,
            amountUSD: 0,
            amountBTC: 0,
            clientName: '',
            tradeStart: '',
            tradeStatus: "NOT PAID",
            paymentMethod: '',
            isTradeRemoved: false,
            tradeHash: '',
            unReadMessages: false,
            reputation: {
                positive: 0,
                negative: 0,
            },
            chat: [
                {
                    time: '',
                    status: "buyer",
                    message: '',
                }
            ]
        }],
    },
    buyer: {
        name: '',
        trades: [
            {
                id: 0,
                amountUSD: 0,
                amountBTC: 0,
                clientName: '',
                tradeStart: '',
                tradeStatus: "NOT PAID",
                paymentMethod: '',
                isTradeRemoved: false,
                tradeHash: '',
                unReadMessages: false,
                reputation: {
                    positive: 0,
                    negative: 0,
                },
                chat: [
                    {
                        time: '',
                        status: "buyer",
                        message: '',
                    }
                ]
            }
        ]
    }
}