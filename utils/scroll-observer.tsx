import React, { ReactNode, useCallback, useEffect, useState } from 'react'

type ScrollValue = {
  scrollY: number
}

export const ScrollContext = React.createContext<ScrollValue>({
  scrollY: 0,
})

type Props = {
  children: ReactNode
}

const ScrollObserver: React.FC<Props> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => document.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollObserver
