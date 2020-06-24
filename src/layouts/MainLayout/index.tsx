import React, { ReactNode, useEffect, useState } from 'react'
import Header from 'src/components/Header'
import HeaderMini from 'src/components/HeaderMini'
import { RouteComponentProps, withRouter } from 'react-router'
import ProgressLineView from 'src/components/ProgressLineView'
import { useDispatch } from 'react-redux'
import { getAllTrades } from './api/getAllTrades'
import { setTrades } from '../../reducer/trades/actions'

type Props = RouteComponentProps & {
    children: ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
    const [isFetching, setFetching] = useState<boolean>(false)
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchTrades() {
            try {
                setFetching((fetching) => !fetching)

                const data = await getAllTrades()
                dispatch(setTrades(data))
            } catch (e) {
                console.log(e)
            } finally {
                setFetching((fetching) => !fetching)
            }
        }

        fetchTrades()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Header />
            <HeaderMini />
            {isFetching ? <ProgressLineView /> : children}
        </div>
    )
}

export default withRouter(MainLayout)
