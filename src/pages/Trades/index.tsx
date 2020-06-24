import React, { useMemo } from 'react'
import { Route, Switch, useLocation } from 'react-router'
import { routes } from 'src/config/routes'
import { useSelector } from 'react-redux'
import { currentUser, currentUserTrades } from 'src/reducer/trades/selectors'
import { User } from 'src/reducer/trades/Model'

import classnames from 'classnames'
import { activeView } from 'src/reducer/toggleView/selectors'
import TradesBlock from './TradesBlock'
import TradeInfo from './TradeInfo'
import TradeChat from './TradeChat'

import styles from './Trades.module.scss'

type Props = {}

const Index = React.memo<Props>((props) => {
    const { pathname } = useLocation()

    const activeViewMode = useSelector(activeView)
    const userTrades: User = useSelector(currentUserTrades)
    const user: string = useSelector(currentUser)

    const chatId = pathname.replace('/trades/chat/', '').trim()

    const chatInfo = useMemo(
        () => userTrades.trades.find((trade) => trade.id === Number(chatId)),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [chatId, user]
    )

    return (
        <div className={styles.trades}>
            <section
                className={classnames(styles.tradesList, {
                    [styles.tradesListActive]: activeViewMode === 'trades_list',
                })}
            >
                <TradesBlock trades={userTrades.trades} />
            </section>
            <section className={styles.tradeChat}>
                <Switch>
                    <Route path={routes.tradeChat} component={TradeChat} />
                </Switch>
            </section>
            <section
                className={classnames(styles.tradeInfo, {
                    [styles.tradeInfoActive]: activeViewMode === 'trade_info',
                })}
            >
                <TradeInfo chatInfo={chatInfo} amountOfTrades={userTrades.trades.length} />
            </section>
        </div>
    )
})

export default Index
