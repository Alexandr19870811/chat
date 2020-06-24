import React, { createRef, useLayoutEffect } from 'react'
import { BUYER, SELLER } from 'src/config/constants'
import { Chat, UserType } from 'src/reducer/trades/Model'
import maleAvatar_1 from 'src/assets/images/maleAvatar.svg'
import maleAvatar_2 from 'src/assets/images/maleAvatar1.svg'
import ChatMessageBuyer from 'src/components/ChatMessageBuyer'
import ChatMessageSeller from 'src/components/ChatMessageSeller'
import { toggleView } from 'src/reducer/toggleView/action'
import { currentUser } from 'src/reducer/trades/selectors'
import { useDispatch, useSelector } from 'react-redux'

import styles from './ChatWindow.module.scss'

type Props = {
    user: UserType
    chat: Chat[] | undefined
}

function resolveMSGAVATAR(msgStatus: UserType, user: UserType) {
    if (user === BUYER) {
        // return msgStatus === BUYER && user === user
        return msgStatus === BUYER && user === BUYER ? maleAvatar_1 : maleAvatar_2
    }
    return msgStatus === BUYER && user === SELLER ? maleAvatar_1 : maleAvatar_2
}

function resolveMessagesPosition(
    key: number,
    user: UserType,
    activeUser: UserType,
    message: string,
    messageStatus: UserType,
    time: string
) {
    if (user === BUYER) {
        return messageStatus === BUYER && user === BUYER ? (
            <ChatMessageBuyer
                key={key}
                user={messageStatus}
                message={message}
                time={time}
                avatar={resolveMSGAVATAR(messageStatus, user)}
            />
        ) : (
            <ChatMessageSeller
                key={key}
                user={messageStatus}
                message={message}
                time={time}
                avatar={resolveMSGAVATAR(messageStatus, user)}
            />
        )
    }
    return messageStatus === BUYER && user === activeUser ? (
        <ChatMessageSeller
            key={key}
            user={messageStatus}
            message={message}
            time={time}
            avatar={resolveMSGAVATAR(messageStatus, user)}
        />
    ) : (
        <ChatMessageBuyer
            key={key}
            user={messageStatus}
            message={message}
            time={time}
            avatar={resolveMSGAVATAR(messageStatus, user)}
        />
    )
}

const Index: React.FC<Props> = ({ chat, user }) => {
    const chatWindowRef = createRef<HTMLDivElement>()
    const dispatch = useDispatch()
    const activeUser = useSelector(currentUser)

    useLayoutEffect(() => {
        // AUTOSCROLL TO THE BOTTOM OF THE CHAT WINDOW
        if (chatWindowRef && chatWindowRef.current) {
            return chatWindowRef.current.scrollTo({
                top: chatWindowRef.current.scrollHeight,
                behavior: 'smooth',
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chat])

    return (
        <div
            onClick={() => {
                dispatch(toggleView(null))
            }}
            className={styles.chatWindow}
            ref={chatWindowRef}
        >
            {chat &&
                chat.map((item, id) =>
                    resolveMessagesPosition(
                        id,
                        user,
                        activeUser,
                        item.message,
                        item.status,
                        item.time
                    )
                )}
        </div>
    )
}

export default Index
