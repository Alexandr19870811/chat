import React, { memo, useEffect } from 'react'
import { Trade } from 'src/reducer/trades/Model'
import { routes } from 'src/config/routes'
import { NavLink, RouteComponentProps, generatePath, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { markTradeRead } from 'src/reducer/trades/actions'
import { currentUser } from 'src/reducer/trades/selectors'
import { resolveAvatar } from 'src/utils/resolveAvatar'
import { toggleView } from 'src/reducer/toggleView/action'
import Avatar from '../../../components/Avatar'

import TradeBriefInfo from './TradeBriefInfo'

import styles from './TradesBlock.module.scss'

type Props = RouteComponentProps<{ id: string }> & {
    trades: Trade[]
}

const Index = memo<Props>((props) => {
    const dispatch = useDispatch()
    const user = useSelector(currentUser)

    const onMarkTradeRead = (tradeId: number) => {
        dispatch(markTradeRead(Number(tradeId)))
    }

    useEffect(() => {
        const id = props.location.pathname.replace('/trades/chat/', '')
        if (id) {
            dispatch(markTradeRead(Number(id)))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!props.trades.length) {
        return (
            <div className={styles.emptyTradesBox}>
                <p>Box is empty.</p>
                <p>Start new trade today!</p>
            </div>
        )
    }

    return (
        <>
            {props.trades.map((trade, id) => (
                <NavLink
                    key={id}
                    activeClassName={styles.activeTrade}
                    onClick={() => {
                        dispatch(toggleView(null))
                        onMarkTradeRead(trade.id)
                    }}
                    to={generatePath(routes.tradeChat, {
                        id: trade.id,
                    })}
                    className={styles.tradeBlock}
                >
                    <TradeBriefInfo
                        unReadMessages={trade.unReadMessages}
                        name={trade.clientName}
                        paymentMethod={trade.paymentMethod}
                        USDAmount={trade.amountUSD}
                        BTCAmount={trade.amountBTC}
                    />
                    <Avatar imgSrc={resolveAvatar(user)} status={trade.tradeStatus} />
                </NavLink>
            ))}
        </>
    )
})

export default withRouter(Index)
