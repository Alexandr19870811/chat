import React, { createRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { markTradeUnread, sendMessage } from 'src/reducer/trades/actions'
import { currentUser } from 'src/reducer/trades/selectors'

import styles from './ChatMessageInput.module.scss'

type Props = {
    tradeId: string
    className: string
}

const Index = React.memo<Props>((props) => {
    const { className, tradeId } = props
    const dispatch = useDispatch()
    const user = useSelector(currentUser)
    const inputRef = createRef<HTMLDivElement>()

    const [message, setMessage] = useState('')

    const onSendMessage = () => {
        if (!message) {
            if (inputRef && inputRef.current) {
                return inputRef.current.focus()
            }
        }

        setTimeout(() => {
            dispatch(markTradeUnread(Number(tradeId)))
            dispatch(sendMessage(message, Number(tradeId), user))
        }, 300)

        setMessage('')
    }

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }

    return (
        <div className={className}>
            <TextField
                rows={2}
                multiline
                value={message}
                placeholder="..."
                variant="outlined"
                inputRef={inputRef}
                onChange={onValueChange}
                className={styles.input}
                label="Type your message"
                id="outlined-multiline-static"
            />
            <Button className={styles.button} onClick={onSendMessage}>
                SEND
            </Button>
        </div>
    )
})

export default Index
