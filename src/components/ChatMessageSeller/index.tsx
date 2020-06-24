import React from 'react'
import { UserType } from 'src/reducer/trades/Model'

import styles from './ChatMessageSeller.module.scss'

type Props = {
    message: string
    user: UserType
    time: string
    avatar: string
}

const Index = React.memo<Props>((props) => (
    <div className={styles.chatMessageBuyer}>
        <p className={styles.message}>{props.message}</p>
        <img src={props.avatar} alt="avatar" />
        <span className={styles.msgTime}>{props.time}</span>
    </div>
))

export default Index
