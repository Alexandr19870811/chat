import { addZero } from './addZero'

function resolveDayPeriod(hours: number): string {
    return hours >= 0 && hours <= 12 ? 'AM' : 'PM'
}

function parseDate(time: Date): string {
    const hours = new Date(time).getHours()
    const minutes = new Date(time).getMinutes()

    return `${addZero(hours)}:${addZero(minutes)} ${resolveDayPeriod(hours)}`
}

export default parseDate
