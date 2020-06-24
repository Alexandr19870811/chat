import { Server } from 'miragejs'
import trades from './trades'

export function makeServer({ environment = 'test' } = {}) {
    const server = new Server({
        environment,

        routes() {
            this.namespace = 'api'

            this.get('/trades', () => server.db.trades, { timing: 3000 })
        },
    })

    server.db.loadData({
        trades,
    })

    server.passthrough('https://api.coindesk.com/v1/bpi/currentprice/USD.json')

    return server
}
