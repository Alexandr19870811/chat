import { useEffect, useState } from 'react'

export function useBreakpoint(extended = false) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    return {
        windowWidth,
    }
}
