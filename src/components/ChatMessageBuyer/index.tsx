import React from 'react'
import { UserType } from 'src/reducer/trades/Model'

import styles from './ChatMessageBuyer.module.scss'

type Props = {
    message: string
    user: UserType
    time: string
    avatar: string
}

const Index = React.memo<Props>((props) => (
    <div className={styles.chatMessageBuyer}>
        <img src={props.avatar} alt="avatar" />
        <p className={styles.message}>{props.message}</p>
        <span className={styles.msgTime}>{props.time}</span>
    </div>
))

export default Index
