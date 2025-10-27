import React from 'react'

const Container = ({children}) => {
  return (
    <>
     <div className="w-full lg:w-[1280px] m-auto">{children}</div> 
    </>
  )
}

export default Container
