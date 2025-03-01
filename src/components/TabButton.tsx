import React, { ReactNode } from 'react'

interface TabButtonProps {
  children: ReactNode;
  isActive: boolean,
  onClick: () => void
}

const TabButton = (props: TabButtonProps) => {
  if (props.isActive) {
    return <p>{props.children}</p>
  }
  return (
    <button onClick={() =>{props.onClick()}} style={{padding:"8px", textAlign: "center"}}>
      {props.children}
    </button>
  )
}

export default TabButton
