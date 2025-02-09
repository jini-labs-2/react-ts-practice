import React from 'react'

const FloatingButton = ({ anker = '#' }: { anker: string | null }) => {
  return (
    <div>
      <button className='floating-button'>
        <a href={'#'+`${anker}`}>Top</a>
      </button>
    </div>
  )
}

export default FloatingButton
