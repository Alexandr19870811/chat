import parseDate from '../utils/parseDate'

export default {
    currentUser: 'buyer',
    buyer: {
        name: 'Alexandr',
        trades: [
            {
                id: 171,
                amountUSD: 100,
                amountBTC: 0.1203,
                clientName: 'Artur',
                tradeStart: 'Started 38 minutes ago',
                tradeStatus: 'PAID',
                paymentMethod: 'Amazon Gift Card',
                isTradeRemoved: false,
                tradeHash: '111k123k1',
                unReadMessages: true,
                reputation: {
                    positive: 174,
                    negative: -24,
                },
                chat: [
                    {
                        time: parseDate(new Date()),
                        status: 'seller',
                        message: 'Hello! Are u available today?',
                    },
                ],
            },
            {
                id: 283,
                amountUSD: 2000,
                amountBTC: 2.1222123,
                clientName: 'Artur',
                tradeStart: 'Started 2 days ago',
                tradeStatus: 'NOT PAID',
                paymentMethod: 'ITunes Gift Card',
                isTradeRemoved: false,
                tradeHash: 'olo111l2',
                unReadMessages: true,
                reputation: {
                    positive: 52,
                    negative: -1,
                },
                chat: [
                    {
                        time: parseDate(new Date()),
                        status: 'buyer',
                        message: 'Write me ASAP. We need to discuss smth...',
                    },
                ],
            },
        ],
    },
    seller: {
        name: 'Artur',
        trades: [
            {
                id: 171,
                amountUSD: 100,
                amountBTC: 0.1203,
                clientName: 'Alexandr',
                tradeStart: 'Started 38 minutes ago',
                tradeStatus: 'PAID',
                paymentMethod: 'Amazon Gift Card',
                isTradeRemoved: false,
                tradeHash: '111k123k1',
                unReadMessages: true,
                reputation: {
                    positive: 174,
                    negative: -24,
                },
                chat: [
                    {
                        time: parseDate(new Date()),
                        status: 'seller',
                        message: 'Hello! Are u available today?',
                    },
                ],
            },
            {
                id: 283,
                amountUSD: 2000,
                amountBTC: 2.1222123,
                clientName: 'Alexandr',
                tradeStart: 'Started 2 days ago',
                tradeStatus: 'NOT PAID',
                paymentMethod: 'ITunes Gift Card',
                isTradeRemoved: false,
                tradeHash: 'olo111l2',
                unReadMessages: true,
                reputation: {
                    positive: 52,
                    negative: -1,
                },
                chat: [
                    {
                        time: parseDate(new Date()),
                        status: 'buyer',
                        message: 'Write me ASAP. We need to discuss smth...',
                    },
                ],
            },
        ],
    },
}
