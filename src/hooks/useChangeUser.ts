import { generatePath, useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import React, { useCallback } from 'react'
import { UserType } from '../reducer/trades/Model'
import { currentUser } from '../reducer/trades/selectors'
import { routes } from '../config/routes'
import { BUYER, SELLER } from '../config/constants'
import { toggleUser } from '../reducer/trades/actions'

const useChangeUser = () => {
    const user: UserType = useSelector(currentUser)
    const dispatch = useDispatch()
    const history = useHistory()
    const [toggledUser, setToggledUser] = React.useState(false)

    const onToggleUser = useCallback(() => {
        history.push(generatePath(routes.trades))

        setToggledUser((prev) => !prev)
        return user === SELLER ? dispatch(toggleUser(BUYER)) : dispatch(toggleUser(SELLER))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return { onToggleUser, toggledUser }
}

export default useChangeUser
