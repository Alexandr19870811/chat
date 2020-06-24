import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { makeServer } from 'src/mirage/server'
import * as serviceWorker from './serviceWorker'
import PageRoute from './pages/PageRoute'
import { store } from './config/store'

if (process.env.NODE_ENV === 'development') {
    makeServer()
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PageRoute />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
