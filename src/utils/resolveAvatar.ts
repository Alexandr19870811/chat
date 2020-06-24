import maleIcon from 'src/assets/images/maleAvatar.svg'
import maleIcon1 from 'src/assets/images/maleAvatar1.svg'
import { UserType } from 'src/reducer/trades/Model'
import { BUYER } from 'src/config/constants'

export function resolveAvatar(userType: UserType) {
    return userType === BUYER ? maleIcon1 : maleIcon
}
