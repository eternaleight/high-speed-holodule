import React from "react"
import type { Api } from "./Main"

type Props = {
  active: boolean
  active3: boolean
  holoData: Api[]
  active5: boolean
}

const UpcomingPanel: React.VFC<Props> = (props) => {
  const youtube_jpeg_size = {
    large: "/maxresdefault.jpg",
    midium: "/sddefault.jpg",
  }
  const style = {
    panel: `hover:shadow-[0_0px_0px_1px_#fff] object-cover cursor-pointer opacity-20
    hover:opacity-80 bg-slate-100 hover:blur-none max-md:ml-1 max-md:w-[36vw] rounded-[10px]
     max-sm:flex-1 `,
  }

  const youtube_jpeg = "https://img.youtube.com/vi/"

  return (
    <div>
      <li className="flex flex-wrap sm:px-[10px] md:w-[20vw] max-md:justify-evenly">
        {props.holoData.map((holoDatas: Api) => {
          return holoDatas.channel.org === "Hololive" &&
            holoDatas.status === "upcoming" &&
            holoDatas.channel.id !== "UCKeAhJvy8zgXWbh9duVjIaQ" &&
            holoDatas.channel.id !== "UCZgOv3YDEs-ZnZWDYVwJdmA" &&
            holoDatas.channel.id !== "UC9mf_ZVpouoILRY9NUIaK-w" &&
            holoDatas.channel.id !== "UCNVEsYbiZjH5QLmGeSgTSzg" &&
            holoDatas.channel.id !== "UCGNI4MENvnsymYjKiZwv9eg" &&
            holoDatas.channel.id !== "UCANDOlYTJT7N5jlRC3zfzVA" &&
            holoDatas.channel.id !== "UChSvpZYRPh0FvG4SJGSga3g" &&
            holoDatas.channel.id !== "UCwL7dgTxKo8Y4RFIKWaf8gA" &&
            holoDatas.channel.id !== "UC6t3-_N8A6ME1JShZHHqOMw" &&
            holoDatas.channel.id !== "" &&
            holoDatas.channel.id !== "UCc88OV45ICgHbn3ZqLLb52w" &&
            holoDatas.channel.id !== "UCgRqGV1gBf2Esxh0Tz1vxzw" &&
            holoDatas.channel.id !== "UCkT1u65YS49ca_LsFwcTakw" &&
            holoDatas.channel.id !== "UCdfMHxjcCc2HSd9qFvfJgjg" &&
            holoDatas.channel.id !== "" &&
            holoDatas.channel.id !== "UCWsfcksUUpoEvhia0_ut0bA" ? (
            <div className="">
              <img
                onClick={() => window.open(`https://www.youtube.com/watch?v=${holoDatas.id}`)}
                key={holoDatas.id}
                className={`${style.panel} ${props.active3 ? "opacity-[0.9]" : null}`}
                src={
                  holoDatas.channel.id === "UCvaTdHTWBGv3MKj3KVqJVCw"
                    ? youtube_jpeg + holoDatas.id + youtube_jpeg_size.midium
                    : youtube_jpeg + holoDatas.id + youtube_jpeg_size.large
                }
              />
              {/* src={youtube_jpeg + holoDatas.id + youtube_jpeg_size.large} /> */}
              <p className="relative inline text-[clamp(14px,1.5vw,16px)] text-slate-300 opacity-[0.9] hover:opacity-[0.3] max-md:text-[14px]">
                {parseInt(holoDatas.start_scheduled.slice(11, -8)) + 9 < 25
                  ? parseInt(holoDatas.start_scheduled.slice(11, -8)) + 9 + ":00"
                  : parseInt(holoDatas.start_scheduled.slice(11, -8)) - 15 + ":00"}
              </p>
              <p className="w-[26vw] font-sans text-slate-300 max-md:text-[12px] max-sm:w-[35vw]">
                {holoDatas.title}
              </p>
            </div>
          ) : null
        })}
      </li>
      <h2 className="mt-1 mb-6 ml-[0.7rem] text-[clamp(14px,1.5vw,16px)] text-white opacity-20 hover:opacity-80 max-sm:text-[11px]">
        放送予定
      </h2>
    </div>
  )
}
export default UpcomingPanel
