import React from 'react'
import { isCorrectLiveHoloUrl } from '../../utils/util'
import type { Api } from './Main'

type Props = {
  active: boolean
  active3: boolean
  holoData: Api[]
}

// eslint-disable-next-line react/display-name
const Live: React.VFC<Props> = React.memo((props) => {
  const style = {
    panel: `hover:shadow-[0_0px_0px_1px_#f00] flex-1 object-cover 
    cursor-pointer opacity-[0.2] mr-1 mt-1 hover:opacity-[0.8] 
    bg-slate-100 hover:blur-none w-[45%] flex-1 rounded-[10px]`,
    panel2: `hover:shadow-[0_0px_0px_1px_#f00]  object-cover 
    cursor-pointer opacity-[0.2] mr-1 mt-1 hover:opacity-[0.8] 
    bg-slate-100 hover:blur-none w-[100%] flex-1 rounded-[10px]`,
    panel3_light: `hover:shadow-none  object-cover 
    cursor-pointer opacity-[0.89] mr-1 mt-1 hover:opacity-[0.19] 
    bg-slate-100 hover:blur-none w-[45%] rounded-[10px]`,
  }

  const youtube_jpeg_size = {
    large: '/maxresdefault.jpg',
    midium: '/sddefault.jpg',
  }

  const youtube_jpeg = 'https://img.youtube.com/vi/'

  return (
    <div>
      <li className="flex flex-wrap items-center rounded-full px-[10px] md:w-[50vw]">
        {props.holoData.map((holoDatas: Api) => {
          return isCorrectLiveHoloUrl(holoDatas) ? (
            <img
              onClick={() => window.open(`https://www.youtube.com/watch?v=${holoDatas.id}`)}
              key={holoDatas.id}
              className={`${!props.active ? style.panel : style.panel2}
                  ${!props.active3 ? style.panel : style.panel3_light}`}
              src={youtube_jpeg + holoDatas.id + youtube_jpeg_size.large}
            />
          ) : // src={youtube_jpeg + holoDatas.id + youtube_jpeg_size.large} />
          // src={
          //   holoDatas.channel.id === 'UCvaTdHTWBGv3MKj3KVqJVCw'
          //     ? youtube_jpeg + holoDatas.id + youtube_jpeg_size.midium
          //     : youtube_jpeg + holoDatas.id + youtube_jpeg_size.large
          // }
          null
        })}
      </li>
      <h2 className="mt-1 mb-6 ml-3 text-[clamp(15px,1.5vw,18px)] text-white opacity-20 hover:opacity-80 max-sm:text-[12px]">
        放送中
      </h2>
    </div>
  )
})
export default Live
