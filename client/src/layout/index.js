import React from 'react'
import logo from '../assets/logo.gif'

const AuthLayouts = ({ children }) => {
  return (
    <>
      <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white'>
        <img
          src={logo}
          alt='logo'
          width={110}
          height={60}
        />
      </header>

      {children}
    </>
  )
}

export default AuthLayouts
