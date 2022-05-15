import React from 'react'

type Props = {
  setIcon: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<Props> = ({ setIcon }) => {
  return (
    <div className='flex'>
      <h2 className='p-1 text-[30px] text-slate-300'>
        <div onClick={() => setIcon(false)}>HighSpeed holodule</div>
      </h2>
    </div>
  )
}

export default Header
