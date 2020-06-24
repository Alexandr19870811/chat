import React, { memo } from 'react'
import Button from '@material-ui/core/Button'
import { Trade } from 'src/reducer/trades/Model'
import classnames from 'classnames'
import { NOT_PAID, PAID } from 'src/config/constants'
import { resolveAvatar } from 'src/utils/resolveAvatar'
import { currentUser } from 'src/reducer/trades/selectors'
import { useSelector } from 'react-redux'
import LiveCurrencyInfo from 'src/components/LiveCurrencyInfo'

import styles from './TradeInfo.module.scss'

type Props = {
    amountOfTrades: number
    chatInfo: Trade | undefined
}

const Index = memo<Props>(({ chatInfo, amountOfTrades }) => {
    const user = useSelector(currentUser)

    if (!chatInfo) {
        return (
            <div className={styles.tradeInfo}>
                <div className={styles.header}>
                    <p className={styles.headerTitle}>No trade is selected</p>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.tradeInfo}>
            <div className={styles.header}>
                <p className={styles.headerTitle}>
                    You are trading with
                    {chatInfo?.clientName}
                </p>
                <p className={styles.headerTime}>{chatInfo.tradeStart}</p>
            </div>
            <div className={styles.buttonContainer}>
                {chatInfo?.tradeStatus === PAID && (
                    <Button variant="contained">Release bitcoins</Button>
                )}
            </div>
            <div className={styles.infoTable}>
                <div className={styles.infoBox}>
                    <img src={resolveAvatar(user)} alt="avatar" />
                    <div className={styles.reputation}>
                        <span className={styles.positive}>{chatInfo?.reputation.positive}</span> /
                        <span className={styles.negative}>{chatInfo?.reputation.negative}</span>
                    </div>
                </div>
                <div className={styles.infoBox}>
                    <span className={styles.title}># Of Trades</span>
                    <span className={styles.numOfTrades}>{amountOfTrades}</span>
                </div>
                <div className={styles.infoBox}>
                    <span className={styles.title}>Trade Status</span>
                    <span
                        className={classnames(styles.status, {
                            [styles.greyStatus]: chatInfo?.tradeStatus === NOT_PAID,
                            [styles.greenStatus]: chatInfo?.tradeStatus === PAID,
                        })}
                    >
                        {chatInfo?.tradeStatus}
                    </span>
                </div>
                <div className={styles.infoBox}>
                    <span className={styles.title}>Trade Hash</span>
                    <span className={styles.amount}>{chatInfo?.tradeHash}</span>
                </div>
                <div className={styles.infoBox}>
                    <span className={styles.title}>Amount USD</span>
                    <span className={styles.amount}>{chatInfo?.amountUSD}</span>
                </div>
                <div className={styles.infoBox}>
                    <span className={styles.title}>Amount BTC</span>
                    <span className={styles.amount}>{chatInfo?.amountBTC}</span>
                </div>
            </div>
            <LiveCurrencyInfo />
        </div>
    )
})

export default Index
