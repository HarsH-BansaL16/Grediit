import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

import * as location from './Loading.json'
import * as success from './Success.json'

const locationDefaultOptions = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const successDefaultOptions = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

function LandingPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(undefined)
  const [completed, setCompleted] = useState(undefined)

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          setData(json)
          setLoading(true)

          setTimeout(() => {
            setCompleted(true)
          }, 1000)
        })
    }, 2000)
  }, [])

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
      {!completed ? (
        <div
          style={{
            position: 'absolute',
            top: '35%',
            left: 'calc(50% - 50px)',
            background: '#222222',
            borderRadius: '100px',
          }}
        >
          {!loading ? (
            <Lottie options={locationDefaultOptions} height={120} width={120} />
          ) : (
            <Lottie options={successDefaultOptions} height={120} width={120} />
          )}
        </div>
      ) : (
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
      )}
    </>
  )
}

export default LandingPage
