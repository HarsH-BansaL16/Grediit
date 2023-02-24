import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  const Navigate = useNavigate()
  function onClickLogin() {
    Navigate('/login')
  }
  var loggedIn = localStorage.getItem('isLoggedIn?')
  useEffect(() => {
    if (loggedIn == 1) {
      Navigate('/profile')
    }
  }, [])

  return (
    <>
      <section class='section top-section' style={{ overflow: 'auto' }}>
        <div class='content-container content-theme-dark'>
          <div class='content-inner'>
            <div class='content-center'>
              <h1>GreddIIT</h1>
              <p>Developed by Harsh Bansal</p>
              <br></br>
              <button className='newButton1' onClick={onClickLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class='section bottom-section' style={{ overflow: 'auto' }}>
        <div class='content-container content-theme-light'>
          <div class='content-inner'>
            <div class='content-center'>
              <h1>GreddIIT</h1>
              <p>Developed by Harsh Bansal</p>
              <br></br>
              <button className='newButton' onClick={onClickLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage
