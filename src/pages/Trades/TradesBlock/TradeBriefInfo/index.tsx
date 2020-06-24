import React from 'react'
import classnames from 'classnames'

import styles from './TradeBriefInfo.module.scss'

type Props = {
    name: string
    paymentMethod: string
    USDAmount: number
    BTCAmount: number
    unReadMessages: boolean
}

const Index = React.memo<Props>((props) => (
    <div className={styles.tradeBriefInfo}>
        <div className={styles.name}>
            <span
                className={classnames(styles.bullet, {
                    [styles.greenBullet]: props.unReadMessages,
                })}
            >
                &#x2022;
            </span>
            {props.name} is buying
        </div>
        <div className={styles.briefInfo}>
            <span className={styles.paymentMethod}>{props.paymentMethod}</span>
            <span className={styles.amount}>
                {props.USDAmount} USD ({props.BTCAmount} BTC)
            </span>
        </div>
    </div>
))

export default Index
