import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentUserName } from 'src/reducer/trades/selectors'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DehazeIcon from '@material-ui/icons/Dehaze'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import useChangeUser from 'src/hooks/useChangeUser'
import { routes } from 'src/config/routes'
import { activeView } from 'src/reducer/toggleView/selectors'
import { toggleView } from 'src/reducer/toggleView/action'
import { useBreakpoint } from 'src/hooks/useBreakpoint'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ToggleOnIcon from '@material-ui/icons/ToggleOn'
import ToggleOffIcon from '@material-ui/icons/ToggleOff'
import { generatePath, useHistory, useLocation } from 'react-router'
import { MIN_WIDTH_860, MIN_WIDTH_960 } from 'src/config/constants'

import styles from './HeaderMini.module.scss'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
})

const Index: React.FC = () => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()
    const { onToggleUser, toggledUser } = useChangeUser()
    const userName = useSelector(currentUserName)
    const activeViewMode = useSelector(activeView)
    const [state, setState] = React.useState({
        left: false,
    })
    const { windowWidth } = useBreakpoint()

    const isActiveView = Boolean(activeViewMode)

    useEffect(() => {
        if (windowWidth <= MIN_WIDTH_960) {
            if (isActiveView) {
                setState({ left: false })
                dispatch(toggleView(activeViewMode))
            } else {
                dispatch(
                    toggleView(
                        windowWidth <= MIN_WIDTH_860 && location.pathname === '/trades'
                            ? 'trades_list'
                            : null
                    )
                )
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeViewMode, windowWidth, location])

    const toggleDrawer = (anchor: any, open: any) => (event: any) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }
        setState({ ...state, [anchor]: open })
    }

    const openTradesList = () => {
        history.push(generatePath(routes.trades))
        dispatch(toggleView('trades_list'))
    }

    const openInfoBlock = () => {
        dispatch(toggleView('trade_info'))
    }

    const list = (anchor: any) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
        >
            <List>
                <ListItem button disabled>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={userName.toUpperCase()} />
                </ListItem>
                <ListItem button onClick={onToggleUser}>
                    <ListItemIcon>
                        {toggledUser ? <ToggleOnIcon /> : <ToggleOffIcon />}
                    </ListItemIcon>
                    <ListItemText primary="Switch user" />
                </ListItem>
            </List>
            <Divider />
            <List>
                {[
                    {
                        btn: 'Overview',
                        action: () => {},
                    },
                    {
                        btn: 'Trades',
                        action: openTradesList,
                    },
                    {
                        btn: 'History',
                        action: () => {},
                    },
                    {
                        btn: 'Index Info',
                        action: openInfoBlock,
                    },
                ].map(({ btn, action }, index) => (
                    <ListItem onClick={action} button key={btn}>
                        <ListItemIcon>
                            <PlayArrowIcon />
                        </ListItemIcon>
                        <ListItemText primary={btn} />
                    </ListItem>
                ))}
            </List>
        </div>
    )

    return (
        <div key="left" className={styles.headerMini}>
            <Button onClick={toggleDrawer('left', true)}>
                <DehazeIcon />
            </Button>
            <SwipeableDrawer
                anchor="left"
                open={state.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {list('left')}
            </SwipeableDrawer>
        </div>
    )
}

export default Index
