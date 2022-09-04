import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import Main from '../components/Main'
import { HeadMeta } from '../components/Head'
import HoloBigIcon from '../components/HoloBigIcon'
import Button from '@mui/material/Button'

const Home: NextPage = () => {
  const [icon, setIcon] = useState<boolean>(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [icon])

  return (
    <div>
      <HeadMeta />
      <div className="flex justify-between">
        <Header setIcon={setIcon} />
      </div>
      {icon ? (
        <div>
          <div
            onClick={() => setIcon(false)}
            className="btn-real fixed bottom-[20px] right-[20px] z-10  h-[60px] w-[60px] cursor-pointer opacity-80"
          >
                      <Button
                        className="p-3 py-3 text-center"
                        variant="outlined"
                        size="small"
                        onClick={() => setIcon(!false)}
                      >
            <i className="fa fa-home"></i>
            {/* <i className="fa fa-home absolute top-[-10px] left-[7px] h-[30%] w-[30%]"></i> */}
                      </Button>
          </div>
          <h2 className="text-3xl text-center text-white animate-pulse2 animate-bounce2">
            Scroll down↓
          </h2>
          <HoloBigIcon />
        </div>
      ) : (
        <Main setIcon={setIcon} />
      )}
    </div>
  )
}

export default Home
