import React, { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  children?: ReactNode
}

export const WorkContainer: React.FC<Props> = ({ children }) => (
  <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">{children}</div>
)

export const WorkBackground: React.FC = () => (
  <div className="sticky top-0 w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
    <div className="h-[30vh] bg-[#112] lg:h-auto"></div>
    <div className="h-[70vh] bg-[#112] lg:min-h-screen"></div>
  </div>
)

export const WorkLeft: React.FC<{
  children?: ReactNode
  progress: number
}> = ({ children, progress }) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50)
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)
  return (
    <div
      className="flex h-[30vh] flex-col items-center justify-center text-3xl lg:h-auto lg:text-3xl"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="leading-10">{children}</div>
    </div>
  )
}

export const WorkRight: React.FC<{
  children?: ReactNode
  progress: number
}> = ({ children, progress }) => {
  const translateY = Math.max(-50, -(progress - 0.5) * 50)
  return (
    <div
      className="flex justify-center flex-1 h-screen lg:items-center"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="w-full max-w-md pt-10 md:px-0 lg:pt-0">{children}</div>
    </div>
  )
}
type LinkProps = {
  href: string
  children?: ReactNode
}
export const WorkLink: React.FC<LinkProps> = ({ href, children }) => (
  <Link href={href}>
    <a target="_blank" rel="noreferrer" className="underline decoration-1 underline-offset-8">
      {children}
    </a>
  </Link>
)
