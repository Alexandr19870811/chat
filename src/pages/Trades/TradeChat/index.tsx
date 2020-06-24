import React, { memo, useMemo } from 'react'
import { Divider } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { currentUser, currentUserTrades } from 'src/reducer/trades/selectors'

import { User } from 'src/reducer/trades/Model'
import ChatMessageInput from 'src/components/ChatMessageInput'
import ChatHeader from './ChatHeader'
import ChatWindow from './ChatWindow'

import styles from './TradeChat.module.scss'

const TradeChat = memo(() => {
    const { pathname } = useLocation()

    const tradeId = pathname.replace('/trades/chat/', '').trim()

    const trades: User = useSelector(currentUserTrades)
    const selectedUserTrades = useSelector(currentUserTrades)
    const user = useSelector(currentUser)

    const trade = useMemo(
        () => selectedUserTrades.trades.find((trade) => trade.id === Number(tradeId)),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [tradeId, user, trades]
    )

    if (!trade) {
        return (
            <div className={styles.noAvailableChat}>
                <p>No Chat</p>
            </div>
        )
    }

    return (
        <>
            <ChatHeader
                chatId={tradeId}
                name={trade?.clientName}
                reputation={trade?.reputation}
                paymentMethod={trade?.paymentMethod}
            />
            <Divider />
            <ChatWindow user={user} chat={trade?.chat} />
            <ChatMessageInput tradeId={tradeId} className={styles.messageInput} />
        </>
    )
})

export default TradeChat
