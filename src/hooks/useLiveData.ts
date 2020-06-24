import { useEffect } from 'react'
import useSWR from 'swr'
import { useDispatch } from 'react-redux'
import { randomNumberGenerator } from '../utils/randomNumberGenerator'
import { startCurrencyLiveUpdate } from '../reducer/liveData/action'

export type ServerResponse = {
    time: {
        updated: string
        updatedISO: string
        updateduk: string
    }
    disclaimer: string
    bpi: {
        USD: {
            code: string
            rate: string
            description: string
            rate_float: number
        }
    }
}

const MIN = 5
const MAX = 10
const API = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'

function createRefreshInterval() {
    return Number(`${randomNumberGenerator(MIN, MAX)}000`)
}

export const useLiveApiData = () => {
    const dispatch = useDispatch()
    const fetcher = (arg: string) => fetch(arg).then((res) => res.json())

    const { data } = useSWR<ServerResponse>(API, fetcher, {
        refreshInterval: createRefreshInterval(),
    })

    useEffect(() => {
        dispatch(
            startCurrencyLiveUpdate(
                data?.time.updated || '',
                data?.bpi.USD.rate || '',
                data?.bpi.USD.code || '',
                data?.bpi.USD.rate_float || 0,
                data?.disclaimer || ''
            )
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data?.time])
}
