export type TradeStore = {
    currentUser: UserType
    buyer: User,
    seller: User
}

export type TradeStatus = "PAID" | "NOT PAID"

export type Reputation = {
    positive: number
    negative: number
}

export type Trade = {
    id: number
    amountUSD: number
    amountBTC: number
    clientName: string
    tradeStart: string
    tradeStatus: TradeStatus
    paymentMethod: string
    isTradeRemoved: false
    tradeHash: string
    reputation: Reputation,
    unReadMessages: boolean
    chat: Chat[]
}

export type Chat = {
    time: string
    status: UserType
    message: string
}

export type User = {
    name: string
    trades: Trade[],
}

export type UserType = "buyer" | "seller"