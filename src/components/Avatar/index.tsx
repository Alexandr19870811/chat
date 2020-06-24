import React, { ReactNode } from 'react'
import classnames from 'classnames'
import { NOT_PAID, PAID } from 'src/config/constants'
import { TradeStatus } from 'src/reducer/trades/Model'

import styles from './Avatar.module.scss'

type Props = {
    imgSrc: string
    status: TradeStatus
    children?: ReactNode
}

const Index = React.memo<Props>(({ imgSrc, status, children }) => (
    <div className={styles.avatar}>
        <img src={imgSrc} alt="avatar" />
        <span
            className={classnames({
                [styles.greyStatus]: status === NOT_PAID,
                [styles.greenStatus]: status === PAID,
            })}
        >
            {status}
        </span>
        {children}
    </div>
))

export default Index
