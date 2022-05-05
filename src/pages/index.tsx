import React, { useCallback, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import Main from '../components/Main'
import { HeadMeta } from '../components/Head'
import HoloBigIcon from '../components/HoloBigIcon'
import { Button } from '@mui/material'

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
        {/* <Button className='m-2' variant='outlined' size='small' onClick={switchIcon}> */}
        {/*   👀 2d */}
        {/* </Button> */}
      </div>
      {icon ? (
        <div>
          <h2 className='text-3xl text-center text-white'>下にScroll↓</h2>
          <HoloBigIcon />
        </div>
      ) : (
        <Main setIcon={setIcon} />
      )}
    </div>
  )
}

export default Home
