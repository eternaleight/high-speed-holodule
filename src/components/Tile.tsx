import React, { useRef, useContext, ReactNode } from 'react'
import { ScrollContext } from '../../utils/scroll-observer'

type WrapperProps = {
  children: ReactNode
  numOfPages: number
}

type TileContextValue = {
  numOfPages: number
  currentPage: number
}

export const TileContext = React.createContext<TileContextValue>({
  numOfPages: 0,
  currentPage: 0,
})

export const TileWrapper: React.FC<WrapperProps> = ({ children, numOfPages }) => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  let currentPage = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2
    const percentY =
      Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
    currentPage = percentY * numOfPages
  }

  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div
        ref={refContainer}
        className="relative text-white bg-black"
        style={{
          height: numOfPages * 100 + 'vh',
        }}
      >
        {children}
      </div>
    </TileContext.Provider>
  )
}

type Children = {
  children?: ReactNode
}

export const TileBackground: React.FC<Children> = ({ children }) => (
  <div className="absolute w-full h-full">{children}</div>
)

export const TileContent: React.FC<Children> = ({ children }) => (
  <div className="sticky top-0 h-[120vh] overflow-hidden">{children}</div>
)

type Props = {
  page: number
  renderContent: (props: { progress: number }) => ReactNode
}

export const Tile: React.FC<Props> = ({ page, renderContent }) => {
  const { currentPage, numOfPages } = useContext(TileContext)
  const progress = Math.max(0, currentPage - page)
  const refContainer = useRef<HTMLDivElement>(null)

  let opacity = Math.min(1, Math.max(0, progress * 4))
  if (progress > 0.85 && page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4)
  }

  return (
    <div
      ref={refContainer}
      className="absolute top-0 w-full"
      style={{
        pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined,
        opacity,
      }}
    >
      {renderContent({ progress })}
    </div>
  )
}
