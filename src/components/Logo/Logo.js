import React from 'react'
import logo from '../../logo.png'
import './Logo.css'

const Logo = () => {
  console.log('dentro de logo')
  return (
    <div className="Logo">
      <img src={logo} alt="logo de listify" />
    </div>
  )
}

export default Logo
