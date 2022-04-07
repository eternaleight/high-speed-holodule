import React from "react"

type Props = {
  active: boolean,
  active3: boolean,
  holoData: number[],
  active5: boolean,
}

const UpcomingPanel: React.VFC<Props> = ((props) => {

  const youtube_jpeg_size = {
    large: "/maxresdefault.jpg",
    midium: "/sddefault.jpg"
  };
  const style = {
    panel: `hover:shadow-[0_0px_0px_1px_#fff] object-cover cursor-pointer opacity-20
    hover:opacity-80 bg-slate-100 hover:blur-none max-sm:mr-1 max-sm:w-[35vw] rounded-[10px]
     max-sm:flex-1 `,
  }


  const youtube_jpeg = "https://img.youtube.com/vi/"

  return (
    <div>
      <li className="flex flex-wrap px-[10px] md:w-[20vw]">
        {props.holoData.map(
          (holoDatas: any) =>  {
            return (
              holoDatas.channel.org === "Hololive" &&
                holoDatas.status === "upcoming" &&
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
                holoDatas.channel.id !== 'UCWsfcksUUpoEvhia0_ut0bA') ? (
                  <div className=''>
                    <img
                      onClick={() => 
                        window.open(`https://www.youtube.com/watch?v=${holoDatas.id}`)}
                      key={holoDatas.id}
                      className={`${style.panel} ${props.active5 ? 'opacity-[0.9]' : null}`}
                      // src={thumbnail} />
                      src={holoDatas.channel.id === 'UCvaTdHTWBGv3MKj3KVqJVCw' 
                        ? youtube_jpeg + holoDatas.id + youtube_jpeg_size.midium 
                        : youtube_jpeg + holoDatas.id + youtube_jpeg_size.large} />
                    <p className='max-sm:text-[10px] text-slate-300 relative text-[1vw] opa'>
                      {parseInt(
                        holoDatas.start_scheduled.slice(11,-8)) +9 < 25 
                          ? parseInt(holoDatas.start_scheduled.slice(11,-8)) +9 + ':00' 
                          : parseInt(holoDatas.start_scheduled.slice(11,-8)) -15 + ':00'}
                    </p>
                  </div>
              ) : null })}
      </li>
      <h2 className='text-[1vw] max-sm:text-[10px] mt-1 mb-6 ml-[0.7rem] text-white opacity-20 hover:opacity-80'>放送予定</h2>
    </div>
  )
})
export default UpcomingPanel
