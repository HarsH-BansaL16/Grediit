import React from 'react'
import { useNavigate } from 'react-router-dom'
import { bubble as Menu } from 'react-burger-menu'

export default function Sidebar(props) {
  const Navigate = useNavigate()

  const onClickLogout = () => {
    localStorage.removeItem('isLoggedIn?')
    Navigate('/')
  }

  return (
    // Pass on our props
    <Menu {...props}>
      <a className='menu-item' href='/' onClick={onClickLogout}>
        Logout
      </a>

      <a className='menu-item' href='/about'>
        About
      </a>

      <a className='menu-item' href='/services'>
        Services
      </a>

      <a className='menu-item' href='/contact'>
        Contact us
      </a>
    </Menu>
  )
}
