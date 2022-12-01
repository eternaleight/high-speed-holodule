import React from 'react'

type Props = {
  classToggle: VoidFunction
}

// eslint-disable-next-line react/display-name
const TabButton: React.VFC<Props> = React.memo(({ classToggle }) => {
  return (
    <div className="relative flex w-[80px] flex-wrap">
      <div
        className="bg-transpalrent absolute h-[150px] w-[40px] cursor-pointer"
        onClick={classToggle}
      ></div>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button"></button>
      <button className="nav-button2"></button>
      <button className="nav-button2"></button>
      <button className="nav-button2"></button>
      <button className="nav-button2"></button>
      <button className="nav-button2"></button>
      <button className="nav-button2"></button>
    </div>
  )
})

export default TabButton
