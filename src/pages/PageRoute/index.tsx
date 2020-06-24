import React, { Suspense, memo, useEffect } from 'react'
import {
    RouteComponentProps,
    Switch,
    generatePath,
    useRouteMatch,
    withRouter,
} from 'react-router-dom'
import { routes } from 'src/config/routes'
import { useLiveApiData } from 'src/hooks/useLiveData'
import RouteComponent from './RouteComponent'

const Trades = React.lazy(() => import('src/pages/Trades'))

const Index = memo<RouteComponentProps>((props) => {
    const isActiveTradesList = useRouteMatch(routes.trades)
    const isActiveTradeChat = useRouteMatch(routes.tradeChat)

    useLiveApiData()

    useEffect(
        () =>
            isActiveTradeChat?.isExact || isActiveTradesList?.isExact
                ? undefined
                : props.history.push(generatePath(routes.trades)),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )

    return (
        <Suspense fallback={null}>
            <Switch>
                <RouteComponent path={routes.trades} component={Trades} />
            </Switch>
        </Suspense>
    )
})

export default withRouter(Index)
