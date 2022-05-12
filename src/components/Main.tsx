import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button'
import HoloButton from './HoloButton'
import TypeWriter from './Typewriter'
import LivePanel from './LivePanel'
import UpcomingPanel from './UpcomingPanel'
import TabButton from './TabButton'

export type Api = {
  available_at: string
  channel: {
    english_name: string
    id: string
    name: string
    org?: 'Hololive' | 'Nijisanji'
    photo: string
    type: string
  }
  duration: number
  id: string
  live_viewres: number
  published_at: string
  start_actual: string
  start_scheduled: string
  status: 'live' | 'upcoming'
  title: string
  topic_id: string
  type: string
}

export type Props = {
  setIcon: Dispatch<SetStateAction<boolean>>
}
   // eslint-disable-next-line react/display-name
const Main: React.VFC<Props> = React.memo(({setIcon}) => {
  const [holoData, setHoloData] = useState<Api[]>([])
  const [active, setActive] = useState<boolean>(false)
  const [active2, setActive2] = useState<boolean>(false)
  const [active3, setActive3] = useState<boolean>(false)

  const classToggle = useCallback(() => {
    setActive(!active)
  }, [active])

  const classToggle2 = useCallback(() => {
    setActive2(!active2)
  }, [active2])

  const classToggle3 = useCallback(() => {
    setActive3(!active3)
  }, [active3])

  const typeWriter = [
    "ボタンを押してLet's カスタマイズ!!(準備中)",
    'ボタンを選ぶと便利なことが起きます⚡️(準備中)',
  ]

  const holoVideo = 'https://www.youtube.com/watch?v='
  const holoUrl = 'https://holodex.net/api/v2/live/'
  const holoUrl2 = 'https://api.holotools.app/v1/videos/'

  useEffect(() => {
    (async () => {
      const res = await fetch(holoUrl)
      const users = await res.json()
      setHoloData(users)
     })()
  }, [holoUrl])


  return (
    <div>
      <div className='flex w-[100vw] flex-wrap'>
        {holoData.map((holoDatas: Api) => {
          return holoDatas.channel.org === 'Hololive' &&
            holoDatas.status === 'live' &&
            holoDatas.channel.id !== 'UCKeAhJvy8zgXWbh9duVjIaQ' &&
            holoDatas.channel.id !== 'UCZgOv3YDEs-ZnZWDYVwJdmA' &&
            holoDatas.channel.id !== 'UC9mf_ZVpouoILRY9NUIaK-w' &&
            holoDatas.channel.id !== 'UCNVEsYbiZjH5QLmGeSgTSzg' &&
            holoDatas.channel.id !== 'UCGNI4MENvnsymYjKiZwv9eg' &&
            holoDatas.channel.id !== 'UCANDOlYTJT7N5jlRC3zfzVA' &&
            holoDatas.channel.id !== 'UChSvpZYRPh0FvG4SJGSga3g' &&
            holoDatas.channel.id !== 'UCwL7dgTxKo8Y4RFIKWaf8gA' &&
            holoDatas.channel.id !== 'UC6t3-_N8A6ME1JShZHHqOMw' &&
            holoDatas.channel.id !== '' &&
            holoDatas.channel.id !== 'UCc88OV45ICgHbn3ZqLLb52w' &&
            holoDatas.channel.id !== 'UCgRqGV1gBf2Esxh0Tz1vxzw' &&
            holoDatas.channel.id !== 'UCkT1u65YS49ca_LsFwcTakw' &&
            holoDatas.channel.id !== 'UCdfMHxjcCc2HSd9qFvfJgjg' &&
            holoDatas.channel.id !== '' &&
            holoDatas.channel.id !== 'UCWsfcksUUpoEvhia0_ut0bA' ? (
            <div>
              <Image
                width={100}
                height={100}
                key={holoDatas.id}
                onClick={() => window.open(`${holoVideo}${holoDatas.id}`)}
                className='w-[100px] cursor-pointer'
                src={holoDatas.channel.photo}
              />
              <p className='mt-[-6px] w-[300px] text-[14px] text-white'>{holoDatas.title}</p>
            </div>
          ) : null
        })}
      </div>
      <div className='text-size-1 bg-slate-900 text-[10px] text-slate-200 duration-300 hover:cursor-pointer hover:bg-blue-700 hover:text-slate-100'>
        Main
      </div>
      <div>
        <div>
          <ul>
            <li className='gap-1 pt-[0.25rem] pb-[10px]'>
              <br />
              <div className=''>
                <div className='flex justify-around'>
                  <ul className='md:flex'>
                    <LivePanel holoData={holoData} active={active} active3={active3} />
                    <UpcomingPanel
                      holoData={holoData}
                      active={active}
                      active3={active3}
                    />
                  </ul>
                  <div className='max-h-[500px]'>
                    <TabButton classToggle={classToggle} />
                    <div className='mt-[10px] flex h-[140px] w-[10px] flex-col opacity-80'>
                      <Button
                        className='mb-1'
                        variant='outlined' size='small' onClick={()=>setIcon(!false)}>
                   holo rpg
                      </Button>
                      <Button
                        className='mb-1'
                        variant='outlined'
                        size='small'
                        onClick={classToggle2}
                      >
                        &#x2699;
                      </Button>
                      <Button
                        className='mb-1'
                        variant='outlined'
                        size='small'
                        onClick={classToggle3}
                      >
                        ⚡️💡
                      </Button>
                    </div>
                  </div>
                </div>
                <div className='flex flex-wrap pt-5'></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <section className='hover2'>
        <div className='hover-img2'>
          <div className={`${active2 ? 'blur-box' : 'none'}`}></div>
        </div>
        <div onClick={classToggle2} className={`${active2 ? 'hover-text2' : 'none'}`}>
          <div onClick={classToggle2} className='ml-[95vw] cursor-pointer max-sm:text-[2.5vw]'>
            ×
          </div>
          <p className='max-sm:text-[2.5vw]'></p>
          <div className='flex items-end'>
            <div className='flex justify-center flex-1'>
              <div className='flex items-end'>
                <div className='flex flex-col'>
                  <p className='font1 ml-[clamp(16px,9.5vw,36px)]  mr-[-110px] mb-[200px] w-[70px] rounded-[1rem] bg-[#ffffff11] p-[2px] text-center text-[10px] text-slate-300 md:ml-12 md:w-[100px] md:p-[3px] md:text-[14px]'>
                    commingsoon!!
                  </p>
                  <div className='absolute top-[230px] ml-[70px] md:ml-[100px]'>
                    <p className='absolute top-[90px] z-10 text-[8px]'>
                      タッチで サムネイル
                      <br />
                      を拡大
                    </p>
                    <Image src='/pointer2.png' width={50} height={130} />
                  </div>
                  <p className='ml-4 text-[30px] md:mr-1'>💻</p>
                </div>
                <div className='mr-1 w-[90px] rounded-full bg-[#111111aa] p-2 text-[0.5rem] text-white md:w-[auto] md:text-[12px]'>
                  <TypeWriter data={typeWriter} />
                </div>
              </div>
              <HoloButton classToggle2={classToggle2} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
})

export default Main
