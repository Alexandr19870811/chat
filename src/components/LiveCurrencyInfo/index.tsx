import React from 'react'
import { useSelector } from 'react-redux'
import { liveCurrencyData } from 'src/reducer/liveData/selectors'

import styles from './LiveCurrencyInfo.module.scss'

const Index = () => {
    const liveData = useSelector(liveCurrencyData)

    if (!liveData.rate) {
        return <div className={styles.liveCurrencyInfo}>Fetching...</div>
    }

    return (
        <div className={styles.liveCurrencyInfo}>
            <div>
                <span>Currency:</span> {liveData.currency}
            </div>
            <div>
                <span>Rate:</span> {liveData.rate}
            </div>
            <div>
                <span>Updated:</span> {liveData.time}
            </div>
            <div>
                <span>Rate float:</span> {liveData.rateFloat}
            </div>
            <div className={styles.description}>{liveData.description}</div>
        </div>
    )
}

export default Index
