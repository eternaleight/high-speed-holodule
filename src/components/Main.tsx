import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '@mui/material/Button'
import Image from 'next/image'
import HoloButton from './HoloButton'
import TypeWriter from './Typewriter'
import LivePanel from './LivePanel'
import UpcomingPanel from './UpcomingPanel'
import PanelButton from './Button'


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

const Main: React.VFC = () => {
  const [holoData, setHoloData] = useState<Api[]>([])
  const [active, setActive] = useState<boolean>(false)
  const [active2, setActive2] = useState<boolean>(false)
  const [active3, setActive3] = useState<boolean>(false)
  const [holoData2, setHoloData2] = useState<number[]>([])
  const [active5, setActive5] = useState<boolean>(false)

  // const reducer = (state: any, action: any) => {
  //   switch (action.type) {
  //     case 'ACTIVE':
  //       return {toggle: setActive(!active)}
  //     case 'ACTIVE2':
  //       return {toggle: setActive(!active2)}
  //     case 'ACTIVE3':
  //       return {toggle: setActive(!active3)}
  //     default:
  //       return state;
  //   }
  // }

  // const [state, dispatch] = useReducer(reducer, {toggle: false})

  //   const classToggle4 = useCallback(() => {
  //     setActive4((prev) => prev + 1)
  //     if (active4 > 3) {
  //       setActive4((prev2) => prev2 - 4)
  //     }
  //   },[active4])
  //
  const classToggle = useCallback(() => {
    setActive(!active)
  }, [active])

  const classToggle2 = useCallback(() => {
    setActive2(!active2)
  }, [active2])

  const classToggle3 = useCallback(() => {
    setActive3(!active3)
  }, [active3])

  const classToggle5 = useCallback(() => {
    setActive5(!active5)
  }, [active5])

  const typeWriter = [
    "ボタンを押してLet's カスタマイズ !!",
    'ボタンを選ぶと便利なことが起きます⚡️',
  ]

  //const youtube_jpeg_size = {
  //  large: "/maxresdefault.jpg",
  //  midium: "/sddefault.jpg"
  //};

  //const donkey = [
  //  //Banjyo Kazooie
  //  'https://www.youtube.com/watch?v=aS40K53JQIg',
  //  //Stickerbrush Symphony
  //  //https://www.youtube.com/watch?v=BW3Gbo7bmMI
  //  //Aquatic Ambience
  //  'https://www.youtube.com/watch?v=SIQ3DfHrd60',
  //  //
  //  'https://www.youtube.com/watch?v=YUIk2PUU2Vg',
  //  //
  //  'https://www.youtube.com/watch?v=dIKdZ2827rM',
  //  //
  //  'https://www.youtube.com/watch?v=hReWJwH8J0c',
  //  //kirinomori
  //  'https://www.youtube.com/watch?v=AnEfB1F9BaY',
  //]

  //// const channelId = 'https://www.youtube.com/channel/'

  //const youtube_jpeg = "https://img.youtube.com/vi/"
  //const youtube = donkey[Math.floor(Math.random() * donkey.length)]
  //const youtube_id = youtube.slice(32)
  const holoVideo = 'https://www.youtube.com/watch?v='
  const holoUrl = 'https://holodex.net/api/v2/live/'
  const holoUrl2 = 'https://api.holotools.app/v1/videos/'

  useEffect(() => {
    async function HoloApi() {
      const res = await fetch(holoUrl)
      const users = await res.json()
      setHoloData(users)
      // console.log(users)
      return res
    }
    HoloApi()
  }, [holoUrl])

  // useEffect(() => {
  //   ;(async () => {
  //     const res = await fetch(holoUrl2)
  //     const users = await res.json()
  //     setHoloData2(users)
  //     return res
  //   })()
  // }, [holoUrl2])
  


  return (
    <div>
      <div className="flex w-[100vw] flex-wrap">
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
                <img
                  key={holoDatas.id}
                  onClick={() => window.open(`${holoVideo}${holoDatas.id}`)}
                  className="w-[100px] cursor-pointer"
                  src={holoDatas.channel.photo}
                />
                <p className="w-[300px] text-[14px] text-white">
                  {holoDatas.title}
                </p>
              </div>
          ) : null
        })}
      </div>
      <div className="text-size-1 bg-slate-900 text-[10px] text-slate-200 duration-300 hover:cursor-pointer hover:bg-blue-700 hover:text-slate-100">
        Main
      </div>
      <div>
        <div>
          <ul>
            <li className="gap-1 pt-[0.25rem] pb-[10px]">
              <br />
              <div className="">
                <div className="flex justify-around">
                  <ul className="md:flex">
                    <LivePanel
                      holoData={holoData}
                      active={active}
                      active3={active3}
                    />
                    <UpcomingPanel
                      holoData={holoData}
                      active={active}
                      active3={active3}
                      active5={active5}
                    />
                  </ul>
                  <div className="max-h-[500px]">
                    <PanelButton classToggle={classToggle} />
                    <div className="mt-[10px] flex h-[140px] w-[10px] flex-col opacity-80">
                      <Button
                        className="mb-1"
                        variant="outlined"
                        size="small"
                        onClick={classToggle2}
                      >
                        &#x2699;
                      </Button>
                      <Button
                        className="mb-1"
                        variant="outlined"
                        size="small"
                        onClick={classToggle3}
                      >
                        ⚡️💡
                      </Button>
                      {/* <Button variant="outlined" size="small" onClick={classToggle5}> */}
                      {/*   ⚡️💡:2 */}
                      {/* </Button> */}
                    </div>
                    {/* <Link href={youtube}><img className='rounded-[10px] mt-[50px] mr-3 w-[8em] h-[4.8em] md:mt-[100px] md:w-[8em] md:h-[4.8em] hover:cursor-pointer opacity-20 hover:opacity-80 object-cover duration-300 max-md:invisible' src={`${youtube_jpeg}${youtube_id}${(youtube_id !== 'SIQ3DfHrd60') ? youtube_jpeg_size.large : youtube_jpeg_size.midium}`} /></Link> */}
                  </div>
                </div>
                <div className="flex flex-wrap pt-5"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <section className="hover2">
        <div className="hover-img2">
          <div className={`${active2 ? 'blur-box' : 'none'}`}></div>
        </div>
        <div
          onClick={classToggle2}
          className={`${active2 ? 'hover-text2' : 'none'}`}
        >
          <div
            onClick={classToggle2}
            className="ml-[95vw] cursor-pointer max-sm:text-[2.5vw]"
          >
            ×
          </div>
          <p className="max-sm:text-[2.5vw]">　</p>
          <div className="flex items-end">
            <div className="flex justify-center flex-1">
              <div className="flex items-end">
                {/* <Image className="" src='/download-2.webp' width={50} height={50}/> */}
                <div className="flex flex-col">
                  <p className="font1 ml-[clamp(16px,9.5vw,36px)]  mr-[-110px] mb-[200px] w-[70px] rounded-[1rem] bg-[#ffffff11] p-[2px] text-center text-[10px] text-slate-300 md:ml-12 md:w-[100px] md:p-[3px] md:text-[14px]">
                    commingsoon!!
                  </p>
                  <p className="ml-4 text-[30px] md:mr-1">💻</p>
                </div>
                <div className="mr-1 w-[90px] rounded-full bg-[#111111aa] p-2 text-[0.5rem] text-white sm:text-[12px] md:w-[auto]">
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
}

export default Main
