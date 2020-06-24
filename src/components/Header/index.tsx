import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { routes } from 'src/config/routes'
import { UserType } from 'src/reducer/trades/Model'
import { useDispatch, useSelector } from 'react-redux'
import { BUYER, SELLER } from 'src/config/constants'
import { currentUser, currentUserName } from 'src/reducer/trades/selectors'
import { toggleUser } from 'src/reducer/trades/actions'
import { RouteComponentProps, generatePath, withRouter } from 'react-router'

import styles from './Header.module.scss'

const navLinks = [
    { path: routes.index, value: 'Overview' },
    { path: routes.trades, value: 'Trades' },
    { path: routes.index, value: 'History' },
]

const navButton = () =>
    navLinks.map((link, id) => (
        <Link key={id} className={link.path === '/' ? styles.disabledLink : ''} to={link.path}>
            <button>{link.value}</button>
        </Link>
    ))

const Index: React.FC<RouteComponentProps> = ({ history }) => {
    const dispatch = useDispatch()

    const user: UserType = useSelector(currentUser)
    const nameOfCurrentUser: string = useSelector(currentUserName)

    const onToggleUser = useCallback(() => {
        history.push(generatePath(routes.trades))

        return user === SELLER ? dispatch(toggleUser(BUYER)) : dispatch(toggleUser(SELLER))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <div className={styles.header}>
            <p className={styles.name}>{nameOfCurrentUser.toUpperCase()}</p>
            {navButton()}
            <button className={styles.toggleBtn} onClick={onToggleUser}>
                Switch to {user === BUYER ? SELLER : BUYER}
            </button>
        </div>
    )
}

export default withRouter(Index)
