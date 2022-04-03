
type Props = {
  active: boolean,
  active3: boolean,
  holoData: any[],
}

const UpcomingPanel: React.VFC<Props> = (props) => {

  const youtube_jpeg_size = {
    large: "/maxresdefault.jpg",
    midium: "/sddefault.jpg"
  };


  const youtube_jpeg = "https://img.youtube.com/vi/"

  return (
    <div className='flex flex-col items-center'>
                      { [1].map(() => <li className="px-[10px] flex flex-wrap items-center rounded-full">
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
                                  <img
                                    onClick={() => window.open(`https://www.youtube.com/watch?v=${holoDatas.id}`)}
                                    key={holoDatas.id}
                                    className='hover:shadow-[0_0px_0px_1px_#fff] flex-1 object-cover cursor-pointer opacity-20 mr-1 mt-1 hover:opacity-80 bg-slate-100 hover:blur-none w-[100px] h-[70px] rounded-[10px]'
                                    // src={thumbnail} />
                                    src={holoDatas.channel.id === 'UCvaTdHTWBGv3MKj3KVqJVCw' ? youtube_jpeg + holoDatas.id + youtube_jpeg_size.midium : youtube_jpeg + holoDatas.id + youtube_jpeg_size.large} />
                              ) : null
                          }
                        )}
                      </li>
                               )}
      <h2 className='mt-3 mb-6 text-white opacity-20 hover:opacity-80'>放送予定</h2>
    </div>
  )
}
export default UpcomingPanel
