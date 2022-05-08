import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import Main from '../components/Main'
import { HeadMeta } from '../components/Head'
import HoloBigIcon from '../components/HoloBigIcon'

const Home: NextPage = () => {
  const [icon, setIcon] = useState<boolean>(false)

  useEffect(() => {
    const scrolltop = window.scrollTo(0, 0)
  }, [icon])

  return (
    <div>
      <HeadMeta />
      <div className='flex justify-between'>
        <Header setIcon={setIcon} />
      </div>
      {icon ? (
        <div>
          <h2 className='text-3xl text-center text-white animate-pulse2 animate-bounce2'>Scroll down↓</h2>
          <HoloBigIcon />
        </div>
      ) : (
        <Main setIcon={setIcon} />
      )}
    </div>
  )
}

export default Home
