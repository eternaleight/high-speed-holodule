import React from 'react'
import Image from 'next/image'
import { Tile, TileWrapper, TileContent, TileBackground } from './Tile'
import { WorkContainer, WorkBackground, WorkLeft, WorkLink, WorkRight } from './Work'
import Rating from './Rating'

const HoloBigIcon: React.FC = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Rating />
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>hololive 2期生</div>
              <div className='text-4xl font-semibold tracking-[0.015] md:text-5xl'>
                <WorkLink href='https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg'>
                  湊あくあ
                </WorkLink>
                &nbsp;Minato aqua
              </div>
              <div className='relative'>
                <span className='duration-0 absolute top-1 max-w-[250px] px-1 text-sm opacity-90 hover:z-10 hover:opacity-100 '>
                  YouTube Aqua Ch. 湊あくあ
                  <br />
                  ファンの愛称 あくあクルー
                  <br />
                  推しマーク ⚓
                  <br />
                  身長 148cm
                  <br />
                  血液型 B型
                  <br />
                  誕生日 12月1日
                  <br />
                  初配信日 2018年8月8日
                  <br />
                  夢 銀河一最強アイドル <br />
                  <br />
                  「皆さんどうもこんあくあ～！バーチャルアイドル
                  ゲーマー猫耳メイドの湊あくあで～す！！」
                  マリンメイド服のバーチャルメイド。本人は頑張っているがおっちょこちょいでドジっ子。{' '}
                </span>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className='max-lg:relative max-lg:-top-32'>
                <Image
                  src='/assets/holo/aqua.png'
                  layout='responsive'
                  width={284}
                  height={534}
                  alt='Minato aqua'
                />
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>hololive 1期生</div>
              <div className='text-4xl font-semibold tracking-tight md:text-5xl'>
                <WorkLink href='https://www.youtube.com/channel/UC1CfXB_kRs3C-zaeTG3oGyg'>
                  赤井はあと
                </WorkLink>
                &nbsp;Akai haato
              </div>
              <div className='relative'>
                <span className='duration-0 absolute top-1 max-w-[250px] px-1 text-sm opacity-90 hover:z-10 hover:opacity-100 '>
                  YouTube HAACHAMA Ch 赤井はあと
                  <br />
                  ファンの愛称 はあとん
                  <br />
                  推しマーク ❤️
                  <br />
                  身長 154cm
                  <br />
                  血液型 A型
                  <br />
                  誕生日 8月10日
                  <br />
                  初配信日 2018年6月2日
                  <br />
                  <br />
                  「こんるーじゅ！赤井はあとよ！」
                  生意気な後輩。普段はツンツンしているが仲良くなった相手には甘えたりする。赤いリボンとハートが好きで、髪や服によくつけている。
                </span>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className='max-lg:relative max-lg:-top-28'>
                <Image
                  src='/assets/holo/haato.png'
                  layout='responsive'
                  width={230}
                  height={463}
                  alt='Akai haato'
                />
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className='md:pl-[4.8vw]'>hololive 2期生</div>
              <div className='text-4xl font-semibold tracking-tight md:pl-[4.8vw] md:text-5xl'>
                <WorkLink href='https://www.youtube.com/channel/UCXTpFs_3PqI41qX2d9tL2Rw'>
                  紫咲シオン
                </WorkLink>
                &nbsp;Murasaki shion
              </div>
              <div className='relative'>
                <span className='duration-0 absolute top-1 max-w-[250px] px-1 text-sm opacity-90 hover:z-10 hover:opacity-100 md:left-[5vw]'>
                  YouTube Shion Ch. 紫咲シオン
                  <br />
                  ファンの愛称 塩っ子
                  <br />
                  推しマーク 🌙
                  <br />
                  身長 145cm
                  <br />
                  血液型 A型
                  <br />
                  誕生日 12月8日
                  <br />
                  初配信 2018年8月17日
                  <br />
                  <br />
                  こんしお～、紫咲シオンだよ」
                  魔界学校に出没する子供・・・ではなく本人曰く大人（らしい）。自称名門の出身で黒魔術を得意としている（らしい）
                  あまり「こんしお」とは言わない。
                </span>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className='scale-[1.18]'>
                <div className='max-lg:relative max-lg:-top-[74px]'>
                  <Image
                    src='/assets/holo/shion.png'
                    layout='responsive'
                    width={100}
                    height={150}
                    alt='Muraski shion'
                  />
                </div>
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
)
export default HoloBigIcon
