import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'

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

function Loader() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(undefined)
  const [completed, setCompleted] = useState(undefined)

  useEffect(() => {
    setTimeout(() => {
      fetch('https://www.google.com')
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

  return (
    <>
      {!completed ? (
        <div
          style={{ position: 'absolute', top: '35%', left: 'calc(50% - 50px)' }}
        >
          {!loading ? (
            <Lottie options={locationDefaultOptions} height={150} width={150} />
          ) : (
            <Lottie options={successDefaultOptions} height={120} width={120} />
          )}
        </div>
      ) : (
        <>
          <h1>Hello People</h1>
        </>
      )}
    </>
  )
}

export default Loader
