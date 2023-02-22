import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Grid } from '@material-ui/core'
import { TextField, Button } from '@mui/material'
import axios from 'axios'
import './Login.css'

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

const FORM_VALIDATION = Yup.object({
  userName: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
})

function Login(props) {
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
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema: FORM_VALIDATION,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = formik.values
    try {
      const url = 'http://localhost:4000/api/auth'
      const { data: res } = await axios.post(url, data)
      console.log(res.message)
      alert(res.message)
      localStorage.setItem('isLoggedIn?',1)
      Navigate('/profile')
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error.response.data.message)
        alert(error.response.data.message)
      }
    }
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
          <Grid container spacing={2}>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}>
              <form style={{ width: '25vw' }} onSubmit={handleSubmit}>
                <span className='loginSpan'> Login </span>
                <TextField
                  label='User Name'
                  name='userName'
                  fullWidth='true'
                  variant='outlined'
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.userName && Boolean(formik.errors.userName)
                  }
                  helperText={formik.touched.userName && formik.errors.userName}
                  onBlur={formik.handleBlur}
                />
                <TextField
                  className='loginTextField'
                  label='Password'
                  name='password'
                  fullWidth='true'
                  variant='outlined'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  onBlur={formik.handleBlur}
                />
                <Button
                  variant='standard'
                  type='submit'
                  className='submitButton'
                >
                  Submit
                </Button>
                <br />
                <Button
                  variant='standard'
                  style={{ marginTop: '40px' }}
                  onClick={() => props.onFormSwitch('register')}
                >
                  Don't have an account ? Register here.
                </Button>
              </form>
            </Grid>
          </Grid>
        </>
      )}
    </>
  )
}

export default Login
