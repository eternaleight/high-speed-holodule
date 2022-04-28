import React from 'react'

type Props = {
  classToggle: VoidFunction
}

// eslint-disable-next-line react/display-name
const TabButton: React.VFC<Props> = React.memo(({ classToggle }) => {
  return (
    <div className='flex w-[80px] flex-wrap'>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button' onClick={classToggle}></button>
      <button type='button' className='nav-button2' onClick={classToggle}></button>
      <button type='button' className='nav-button2' onClick={classToggle}></button>
      <button type='button' className='nav-button2' onClick={classToggle}></button>
      <button type='button' className='nav-button2' onClick={classToggle}></button>
      <button type='button' className='nav-button2' onClick={classToggle}></button>
      <button type='button' className='nav-button2' onClick={classToggle}></button>
    </div>
  )
})

export default TabButton
