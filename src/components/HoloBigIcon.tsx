import React from 'react'
import Image from 'next/image'
import { Tile, TileWrapper, TileContent, TileBackground } from './Tile'
import { WorkContainer, WorkBackground, WorkLeft, WorkLink, WorkRight } from './Work'

const HoloBigIcon = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>hololive 2期生</div>
              <div className='text-4xl font-semibold tracking-[0.015] md:text-5xl'>
                <WorkLink href='https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg'>湊あくあ</WorkLink>&nbsp;Minato aqua</div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image src='/assets/holo/aqua.png' layout='responsive' width={284} height={534} alt='Pink Panda' />
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
              <WorkLink href='https://www.youtube.com/channel/UC1CfXB_kRs3C-zaeTG3oGyg'>赤井はあと</WorkLink>&nbsp;Akai haato</div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image src='/assets/holo/haato.png' layout='responsive' width={230} height={463} alt='Steakwallet' />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className='pl-6'>hololive 2期生</div>
              <div className='pl-6 text-4xl font-semibold tracking-tight md:text-5xl'>
             <WorkLink href='https://www.youtube.com/channel/UCXTpFs_3PqI41qX2d9tL2Rw'>紫咲シオン</WorkLink>&nbsp;Murasaki shion</div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className='scale-[1.18]'>
              <Image src='/assets/holo/shion.png' layout='responsive' width={100} height={150} alt='Showtime' />
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
)
export default HoloBigIcon
