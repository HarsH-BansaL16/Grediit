import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Profile.css'
import SideBar from './sidebar'
function Profile() {
  const Navigate = useNavigate()

  var loggedIn = localStorage.getItem('isLoggedIn?')

  useEffect(() => {
    if (loggedIn == null) {
      Navigate('/login')
    }
  })

  return (
    <>
      <div id='App'>
        <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
      </div>
    </>
  )
}

export default Profile
