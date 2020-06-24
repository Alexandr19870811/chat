import React from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps, generatePath, withRouter } from 'react-router'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { Reputation } from 'src/reducer/trades/Model'
import { deleteTrade } from 'src/reducer/trades/actions'
import { routes } from 'src/config/routes'

import styles from './ChatHeader.module.scss'

type Props = RouteComponentProps & {
    chatId: string
    name: string | undefined
    paymentMethod: string | undefined
    reputation: Reputation | undefined
}

const Index = React.memo<Props>(({ paymentMethod, history, name, reputation, chatId }) => {
    const dispatch = useDispatch()

    const onDeleteChat = () => {
        setTimeout(() => {
            dispatch(deleteTrade(Number(chatId)))
            return history.push(generatePath(routes.trades))
        }, 300)
    }

    return (
        <div className={styles.chatHeader}>
            <IconButton className={styles.delete} aria-label="delete" onClick={onDeleteChat}>
                <DeleteIcon />
            </IconButton>
            <div className={styles.text}>
                <p className={styles.paymentMethod}>{paymentMethod}</p>
                <div className={styles.reputation}>
                    {name}
                    <span className={styles.positive}>{reputation?.positive}</span>/
                    <span className={styles.negative}>{reputation?.negative}</span>
                </div>
            </div>
        </div>
    )
})

export default withRouter(Index)
